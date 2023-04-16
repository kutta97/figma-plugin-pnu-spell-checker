import { PAGE_TYPE } from '@consts/index';

import { checkListenerConnect } from '@store/home/index';
import { nextPage } from '@store/root';

const checkListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CHECKING }));

  const { selectedNodes } = listenerApi.getState().nodeReducer;

  console.log('nodes', selectedNodes);

  const words = selectedNodes.reduce((acc, cur) => {
    if (cur.type === 'TEXT') return `${acc + cur.value}\n`;
    if (cur.type === 'FRAME')
      return acc + cur.children.map((node) => node.value).join(' ');
    return acc;
  }, '');

  console.log('word', words);

  // const result = await fetch(`http://localhost:3000/check?word="${words}"`);

  try {
    // TODO Change request.promise to request.fetch and use the Search API
    // await request.promise(() => asyncMessage('check'));
    setTimeout(() => {
      console.log('async time wait 3s');
      dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
    }, 3000);
  } catch (e) {
    /* empty */
    console.error(e);
  }
};

const homeListeners = [
  { actionCreator: checkListenerConnect, effect: checkListener },
];

export default homeListeners;
