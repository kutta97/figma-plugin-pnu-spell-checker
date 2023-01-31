import { homeListenerConnector, setName } from './index';
import { services } from '../../../services';

const homeListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;
  const { home } = listenerApi.getState();

  const data = (await services.homeServices.homeData).transferData();
  dispatch(setName(data));
};

const homeListeners = [
  { actionCreator: homeListenerConnector, effect: homeListener },
];

export default homeListeners;
