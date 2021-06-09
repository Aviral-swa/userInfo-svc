import IUserInfo from '../../entities/IUserInfo';
import UserInfoRepository from '../../repositories/business/userInfo/repository';

class UserInfoService {

  // tslint:disable-next-line:variable-name
  private _userInfoRepository: UserInfoRepository;

  public constructor() {
    this._userInfoRepository = new UserInfoRepository();
  }
  public async list(limit: number, skip: number): Promise<IUserInfo[]> {
    return this._userInfoRepository.list({ limit, skip });
  }

  public async get(): Promise<IUserInfo[]> {
    return this._userInfoRepository.get();
  }

  public async create(query): Promise<IUserInfo> {
    const { city, testId } = query;
    return this._userInfoRepository.create({
      city,
      testId,
    });
  }

  public async update(query): Promise<IUserInfo> {
    const { name, originalId } = query;
    return this._userInfoRepository.update({
      name,
      originalId,
    });
  }

  public async delete(query): Promise<IUserInfo> {
    const { id } = query;
    return this._userInfoRepository.delete({
      id,
    });
  }
}

export default UserInfoService;
