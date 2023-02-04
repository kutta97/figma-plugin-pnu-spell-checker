import { rootListenerConnector } from './index';

const rootListener = async (action, listenerApi) => {};

const rootListeners = [
  { actionCreator: rootListenerConnector, effect: rootListener },
];

export default rootListeners;
