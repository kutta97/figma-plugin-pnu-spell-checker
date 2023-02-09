import * as selector from './selector';
import { homeSlice } from './slice';

export const { searchListenerConnect, setName } = homeSlice.actions;
export const { homeSelector, homeNameSelector } = selector;
export const homeReducer = homeSlice.reducer;
