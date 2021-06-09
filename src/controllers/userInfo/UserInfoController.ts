import { Request, Response, NextFunction } from 'express';
// import { userinfo } from '../../libs/mockData';
import { UserInfoService } from '../../services';

class UserInfoController {
  static instance: UserInfoController;

    static getInstance() {
        if (UserInfoController.instance) {
            return UserInfoController.instance;
        }

        UserInfoController.instance = new UserInfoController();
        return UserInfoController.instance;
    }
    private userInfoRepository: UserInfoService;
    constructor() {
        this.userInfoRepository = new UserInfoService();
    }

   public getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userinfo = await this.userInfoRepository.get();
      if (!userinfo.length) {
        return res.status(200).send({
          data: [],
          message: 'No Data',
          status: 200,
        });
      }
      res.status(200).send({
        data: userinfo,
        message: 'Successfully fetched',
        status: 200,
    });
    } catch (err) {
      return next(err);
    }
  }

}

export default UserInfoController.getInstance();
