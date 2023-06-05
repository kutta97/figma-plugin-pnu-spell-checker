import { PAGE_TYPE } from '@consts/index';

import { convertListenerConnect } from '@store/result/index';
import { nextPage } from '@store/root';

const convertListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.CONVERTING }));

  const { selectedNodes } = listenerApi.getState().nodeReducer;
  const textNodeId = selectedNodes[0].id;
  const originalText = selectedNodes[0].value;

  const { resultList } = listenerApi.getState().resultReducer;
  const convertList = resultList.filter((result) => result.checked);

  const convertedText = convertList.reduce((text, convert) => {
    const { beforeText, afterText } = convert.data;
    return text.replace(beforeText, afterText);
  }, originalText);

  window.parent.postMessage(
    {
      pluginMessage: {
        type: 'convert',
        convert: {
          id: textNodeId,
          text: convertedText,
        },
      },
    },
    '*'
  );
};

const homeListeners = [
  { actionCreator: convertListenerConnect, effect: convertListener },
];

export default homeListeners;
