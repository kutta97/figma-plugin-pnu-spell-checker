import { HomeUsecase } from '@Data/home/homeUsecase';
import { HomeService } from './homeService';

const home = HomeService();
const homeUsecase = HomeUsecase(home.getApi());

export default {
  homeData: homeUsecase.getHomeData(),
};
