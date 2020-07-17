import { WithId } from 'mongodb';
import { hash, verify } from 'argon2';
import { sign, verify as verifyJWT } from 'jsonwebtoken';
import {
  IAuth,
  JWTData,
  UserData,
  IUserModel,
  LoginResult,
  SignUpResult,
  NormalizedError,
  VerifyJWTResult,
} from '../../interfaces';

class Auth implements IAuth {
  static SIGN = 'Yn"`%n8Sknj?wa]6+;8{';

  constructor(private readonly userModel: IUserModel) {}

  private static generateJWT(userRecord: WithId<UserData>): string {
    const data: JWTData =  {
      _id: userRecord._id,
      username: userRecord.username,
    };

    return sign({ data, }, Auth.SIGN, { expiresIn: '30m' });
  }

  private static validateUserFindResult(userRecord: UserData | null, username: string): void | never {
    if (!userRecord) {
      const error: NormalizedError = new Error(`User '${username}' not found`);
      error.statusCode = 200;
      throw error;
    }
  }

  private static validateUserName(username: string): void | never {
    if (!username) {
      const error: NormalizedError = new Error(`'username' param is missing!`);
      error.statusCode = 422;
      throw error;
    }
  }

  private static validatePassword(username: string): void | never {
    if (!username) {
      const error: NormalizedError = new Error(`'password' param is missing!`);
      error.statusCode = 422;
      throw error;
    }
  }

  async loginByAuthToken(authorizationHeader: string | undefined): Promise<LoginResult | null> | never {
    if (authorizationHeader) {
      const token: string = authorizationHeader.split(/\s+/).pop()!;
      try {
        const verifyResult = verifyJWT(token, Auth.SIGN) as VerifyJWTResult;
        const userRecord = await this.userModel.findOne({ username: verifyResult.data.username });
        Auth.validateUserFindResult(userRecord, verifyResult.data.username);
        return {
          user: {
            username: userRecord!.username,
          },
          token,
        };
      } catch (e) {
        const error: NormalizedError = e;
        error.statusCode = 401;
        throw e;
      }
    }
    return null;
  }

  public async signUp(username: string, password: string): Promise<SignUpResult> | never {
    Auth.validateUserName(username);
    Auth.validatePassword(password);
    const passwordHashed = await hash(password);
    const user = await this.userModel.findOne({username});
    if (user) {
      const error: NormalizedError = new Error(`User '${username}' already exists!`);
      error.statusCode = 200;
      throw error;
    }
    await this.userModel.create({
      username,
      password: passwordHashed,
    });

    return {
      user: {
        username,
      }
    };
  }

  public async login(username: string, password: string): Promise<LoginResult> | never {
    Auth.validateUserName(username);
    Auth.validatePassword(password);
    const userRecord = await this.userModel.findOne({ username });
    Auth.validateUserFindResult(userRecord, username);
    const isPasswordCorrect = await verify(userRecord!.password, password);
    if (!isPasswordCorrect) {
      const error: NormalizedError = new Error(`Incorrect password`);
      error.statusCode = 200;
      throw error;
    }

    return {
      user: {
        username: userRecord!.username,
      },
      token: Auth.generateJWT(<WithId<UserData>>userRecord),
    }
  }
}

export default Auth;
