import { PAGE_TYPE } from '@consts/index';

import request from '@utils/request';
import { sleep } from '@utils/timer';

import { nextPage } from '@store/root';

import { searchListenerConnect } from './index';

const searchListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.SEARCHING }));

  try {
    // TODO Change request.promise to request.fetch and use the Search API
    await request.promise(() => sleep(3000));
    dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
  } catch (e) {
    /* empty */
  }
};

const homeListeners = [
  { actionCreator: searchListenerConnect, effect: searchListener },
];

export default homeListeners;
