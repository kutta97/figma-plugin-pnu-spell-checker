import { homeSlice } from './slice';
import * as selector from './selector';

export const { homeListenerConnector, setName } = homeSlice.actions;
export const { homeSelector, homeNameSelector } = selector;
export const homeVM = homeSlice.reducer;
