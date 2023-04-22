import * as selector from '@store/home/selector';
import { homeSlice } from '@store/home/slice';

export const { checkListenerConnect, setName, setFilter } = homeSlice.actions;
export const { homeSelector, homeNameSelector } = selector;
export const homeReducer = homeSlice.reducer;
