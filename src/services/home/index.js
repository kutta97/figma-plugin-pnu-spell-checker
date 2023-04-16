import { HomeUsecase } from '@data/home/homeUsecase';

import { HomeService } from './homeService';

const home = HomeService();
const homeUsecase = HomeUsecase(home.getSpellCheck);

export default {
  spellCheck: homeUsecase.getSpellCheck,
};
