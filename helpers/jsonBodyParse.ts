import { NormalizedError } from '../interfaces';

export default <T>(body: string): T | never => {
  try {
    return JSON.parse(body);
  } catch (e) {
    const error: NormalizedError = new Error("Post data should be in 'application/json' raw type format!");
    error.statusCode = 400;
    throw error;
  }
};
