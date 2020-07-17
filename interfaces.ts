import { FilterQuery, InsertOneWriteOpResult, WithId } from 'mongodb';

export enum Mode {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

export interface IUserModel {
  create(userData: UserData): Promise<InsertOneWriteOpResult<WithId<UserData>>>
  findOne(query: FilterQuery<UserData>): Promise<UserData | null>
}

export interface JWTData {
  _id: any;
  username: string;
}

export interface VerifyJWTResult {
  data: JWTData;
  iat: number;
  exp: number;
}

export interface UserData {
  username: string;
  password: string;
}

export interface SignUpResult {
  user: {
    username: string
  };
}

export interface LoginResult {
  user: {
    username: string;
  };
  token: string;
}

export enum Routes {
  HOME = '/',
  ADMIN_AREA = '/api/auth',
  AUTH_LOGIN = '/api/auth/login',
  AUTH_SIGNUP = '/api/auth/signup',
}

export interface NormalizedError extends Error {
  statusCode?: number;
}

export type ResponseData = {
  success: true;
  payload?: object;
} | {
  success: false;
  error?: string;
};

export interface IAuth {
  signUp(username: string, password: string): Promise<SignUpResult> | never;
  login(username: string, password: string): Promise<LoginResult> | never;
  loginByAuthToken(authorizationHeader: string | undefined): Promise<LoginResult | null> | never;
}
