import { PAGE_TYPE } from '@consts/index';

import { asyncMessage } from '@utils/messages';
import request from '@utils/request';

import { searchListenerConnect } from '@store/home/index';
import { nextPage } from '@store/root';

const searchListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

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

  dispatch(nextPage({ page: PAGE_TYPE.SEARCHING }));

  try {
    // TODO Change request.promise to request.fetch and use the Search API
    window.parent.postMessage({ pluginMessage: { query: 'search' } }, '*');
    const data = await request.promise(() => asyncMessage('search'));
    console.log('data', data);
    dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
  } catch (e) {
    /* empty */
    console.error(e);
  }
};

const homeListeners = [
  { actionCreator: searchListenerConnect, effect: searchListener },
];

export default homeListeners;
