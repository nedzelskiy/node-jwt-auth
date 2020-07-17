import { ServerResponse } from 'http';
import { NormalizedError, ResponseData } from '../interfaces';

export default (e: NormalizedError, res: ServerResponse): void => {
  res.statusCode = e.statusCode || 500;
  const response: ResponseData = {
    success: false,
    error: e.toString(),
  };
  return res.end(JSON.stringify(response));
}
