import { nodeListenerConnector } from '@store/node/index';

const nodeListener = async (action, listenerApi) => {};

const nodeListeners = [
  { actionCreator: nodeListenerConnector, effect: nodeListener },
];

export default nodeListeners;
