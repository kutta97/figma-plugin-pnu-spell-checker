import { PAGE_TYPE } from '@consts/index';

import { asyncMessage } from '@utils/messages';
import request from '@utils/request';

import { checkListenerConnect } from '@store/home/index';
import { nextPage } from '@store/root';

const checkListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CHECKING }));

  try {
    // TODO Change request.promise to request.fetch and use the Search API
    const data = await request.promise(() => asyncMessage('check'));
    console.log('data', data);
    dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
  } catch (e) {
    /* empty */
    console.error(e);
  }
};

const homeListeners = [
  { actionCreator: checkListenerConnect, effect: checkListener },
];

export default homeListeners;
