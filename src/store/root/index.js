import * as selector from './selector';
import { rootSlice } from './slice';

export const { rootListenerConnector, nextPage, prevPage, pageClear } =
  rootSlice.actions;
export const { rootSelector } = selector;
export const rootReducer = rootSlice.reducer;
