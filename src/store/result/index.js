import * as selector from './selector';
import { resultSlice } from './slice';

export const { convertListenerConnect } = resultSlice.actions;
export const { resultSelector } = selector;
export const resultReducer = resultSlice.reducer;
