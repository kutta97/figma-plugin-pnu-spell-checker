import { PAGE_TYPE } from '@consts/index';

import request from '@utils/request';
import { sleep } from '@utils/timer';

import { convertListenerConnect } from '@store/result/index';
import { nextPage } from '@store/root';

const convertListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CONVERTING }));

  try {
    // TODO Change promise function to Converting
    await request.promise(() => sleep(3000));
    dispatch(nextPage({ page: PAGE_TYPE.COMPLETE, isNotRecord: true }));
  } catch (e) {
    /* empty */
  }
};

const homeListeners = [
  { actionCreator: convertListenerConnect, effect: convertListener },
];

export default homeListeners;
