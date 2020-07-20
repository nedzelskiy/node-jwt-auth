import Auth from './services/Auth/Auth';
import { Db, MongoClient } from 'mongodb';
import loginHandler from './handlers/login';
import errorHandler from './handlers/error';
import adminHandler from './handlers/admin';
import signupHandler from './handlers/signup';
import UserModel from './models/UserModel/UserModel';
import { Mode, ResponseData, Routes } from './interfaces';
import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

const SERVER_HOST: string = process.env.HOST || 'localhost';
const SERVER_PORT: string = process.env.PORT || '1234';
const SERVER_PROTOCOL: string = process.env.PROTOCOL || 'http';
const SERVER_DOMAIN: string = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;
const NODE_ENV: Mode = process.env.NODE_ENV === Mode.PRODUCTION
  ? Mode.PRODUCTION
  : Mode.DEVELOPMENT;

(async () => {

let db: Db;

try {
  const client: MongoClient = await MongoClient.connect(process.env.MONGO_CONNECTION_URL || '');
  db = client.db('node-jwt-auth');
  process.on('exit', () => client.close());
} catch (e) {
  console.log(e);
  process.exit(1);
}

const server: Server = createServer();

server
  .on('request', async (req: IncomingMessage, res: ServerResponse) => {
    try {
      res.statusCode = 200;
      if (req.url === Routes.HOME) {
        let routes = [];
        for (let enumMember in Routes) {
          const route = (Routes as any)[enumMember];
          routes.push(route);
        }
        const response: ResponseData = {
          success: true,
          payload: {
            availableRoutes: routes
          },
        };
        return res.end(JSON.stringify(response));
      }

      if (req.url === Routes.ADMIN_AREA) {
        const userModel = new UserModel(db);
        const auth = new Auth(userModel);
        return adminHandler(auth, req, res);
      }

      if (req.method === 'POST') {
        let body = '';
        await req.on('data', chunk => body += chunk.toString());

        switch (req.url) {
          case Routes.AUTH_SIGNUP: {
            const userModel = new UserModel(db);
            const auth = new Auth(userModel);
            return await signupHandler(auth, body, res);
          }

          case Routes.AUTH_LOGIN: {
            const userModel = new UserModel(db);
            const auth = new Auth(userModel);
            return await loginHandler(auth, body, req, res);
          }
        }
      }
      res.statusCode = 404;
      res.end('Not Found');
    } catch (e) {
      return errorHandler(e, res);
    }
  })
  .listen(
    parseInt(SERVER_PORT, 10),
    SERVER_HOST,
    () => console.log(
      `==> [${process.pid}] SERVER STARTED on ${SERVER_DOMAIN} MODE: ${NODE_ENV}`,
    ),
  );

}) ();
