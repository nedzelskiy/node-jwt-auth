import errorHandler from './error';
import { ServerResponse } from 'http';
import jsonBodyParse from '../helpers/jsonBodyParse';
import { IAuth, ResponseData, UserData } from '../interfaces';

export default async (auth: IAuth, body: string, res: ServerResponse) => {
  try {
    const userData = jsonBodyParse<UserData>(body);
    await auth.signUp(userData.username, userData.password);
    const response: ResponseData = {
      success: true,
    };
    res.end(JSON.stringify(response));
  } catch (e) {
    return errorHandler(e, res);
  }
}
