import errorHandler from './error';
import { IAuth, ResponseData } from '../interfaces';
import { IncomingMessage, ServerResponse } from 'http';

export default async (auth: IAuth, req: IncomingMessage, res: ServerResponse) => {
  try {
    res.statusCode = 401;
    let response: ResponseData = {
      success: false,
    };

    if (await auth.loginByAuthToken(req.headers['authorization'])) {
        res.statusCode = 200;
        response = {
          success: true,
        };
    }
    return res.end(JSON.stringify(response));
  } catch (e) {
    return errorHandler(e, res);
  }
}
