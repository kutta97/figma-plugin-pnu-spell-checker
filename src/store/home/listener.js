import { PAGE_TYPE } from '@consts/index';

import { asyncMessage } from '@utils/messages';
import request from '@utils/request';

import { checkListenerConnect } from '@store/home/index';
import { nextPage } from '@store/root';

const checkListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CHECKING }));

  const { selectedNodes } = listenerApi.getState().nodeReducer;

  const words = selectedNodes.reduce((acc, cur) => {
    if (cur.type === 'TEXT') return `${acc + cur.value}\n`;
    if (cur.type === 'FRAME')
      return acc + cur.children.map((node) => node.value).join(' ');
    return acc;
  }, '');

  console.log('word', words);

  const result = await fetch(`http://localhost:3000/check?word="${words}"`);
  console.log('result', await result.json());

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
