import UserInfoRepository from '../services/userInfo/UserInfoService';
import { userinfo } from './mockData';

const userInfoRepository: UserInfoRepository = new UserInfoRepository();
export async function userInfoSeed() {
    const dbUsers = await userInfoRepository.get();
    if (dbUsers.length === 0) {
        try {
            console.log('Seeding Data');
            userinfo.forEach((user) => {
              userInfoRepository.create(user);
            })

        } catch (err) {
            console.log(err);
        }
    }
}

