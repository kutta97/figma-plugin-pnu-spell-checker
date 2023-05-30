import { homeReducer } from '@store/home';
import { nodeReducer } from '@store/node';
import { resultReducer } from '@store/result';
import { rootReducer } from '@store/root';
import { toastReducer } from '@store/toast';

export const reducers = {
  homeReducer,
  rootReducer,
  resultReducer,
  nodeReducer,
  toastReducer,
};
