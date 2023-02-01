import { HomeService } from './homeService';
import { HomeUsecase } from '../../data/home/homeUsecase';

const home = HomeService();
const homeUsecase = HomeUsecase(home.getApi());

export default {
  homeData: homeUsecase.getHomeData(),
};
