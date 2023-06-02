import { PAGE_TYPE } from '@consts/index';

import { services } from '@services/index';

import { checkListenerConnect } from '@store/home/index';
import { setResultList } from '@store/result';
import { nextPage } from '@store/root';

const checkListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CHECKING }));

  const { selectedNodes } = listenerApi.getState().nodeReducer;
  const originalText = selectedNodes[0].value;

  try {
    const resultList = await services.spellCheckService.spellCheck(
      originalText
    );
    dispatch(setResultList(resultList));
    dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
  } catch (e) {
    console.error(e);
  }
};

const homeListeners = [
  { actionCreator: checkListenerConnect, effect: checkListener },
];

export default homeListeners;
