import errorHandler from './error';
import jsonBodyParse from '../helpers/jsonBodyParse';
import { IncomingMessage, ServerResponse } from 'http';
import { IAuth, NormalizedError, ResponseData, UserData } from '../interfaces';

export default async (
  auth: IAuth,
  body: string,
  req: IncomingMessage,
  res: ServerResponse,
) => {
  try {
    let response: ResponseData = {
      success: true
    };
    const loginByTokenResult = await auth.loginByAuthToken(req.headers['authorization']);
    if (loginByTokenResult) {
      response.payload = loginByTokenResult;
    } else {
      if (!body) {
        const error: NormalizedError = new Error("Didn't pass 'username' or 'password'");
        error.statusCode = 422;
        throw error;
      }
      const userData = jsonBodyParse<UserData>(body);
      response.payload = await auth.login(userData.username, userData.password);
    }
    return res.end(JSON.stringify(response));
  } catch (e) {
    return errorHandler(e, res);
  }
}
