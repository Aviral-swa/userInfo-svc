import { Request, Response, NextFunction } from 'express';
import { userinfo } from '../../libs/mockData';
import { HomeService } from '../../services';

class UserInfoController {
  static instance: UserInfoController;

    static getInstance() {
        if (UserInfoController.instance) {
            return UserInfoController.instance;
        }

        UserInfoController.instance = new UserInfoController();
        return UserInfoController.instance;
    }
    private userRepository: HomeService;
    constructor() {
        this.userRepository = new HomeService;
    }

   public getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const result = await UserInfoController.getInstance()._homeService.list(limit, skip);
      if (!userinfo) {
        return res.status(200).send({
          message: 'No Data',
          data: [],
          status: 200,
        });
      }
      res.status(200).send({
        message: 'Successfully fetched',
        data: userinfo,
        status: 200,
    });
    } catch (err) {
      return next(err);
    }
  }

}

export default UserInfoController.getInstance();
