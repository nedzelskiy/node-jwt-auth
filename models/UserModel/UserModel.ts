import { IUserModel, UserData } from '../../interfaces';
import { Db, FilterQuery, InsertOneWriteOpResult, WithId } from 'mongodb';

class UserModel implements IUserModel {
  static TABLE_NAME = 'users';

  constructor(private readonly db: Db) {}

  async create(userData: UserData): Promise<InsertOneWriteOpResult<WithId<UserData>>> {
    const { password, username } = userData;
    return this.db.collection(UserModel.TABLE_NAME).insertOne({
      username,
      password,
    });
  }

  async findOne(query: FilterQuery<UserData>): Promise<UserData | null> {
    return this.db.collection(UserModel.TABLE_NAME).findOne(query);
  }

}

export default UserModel;
