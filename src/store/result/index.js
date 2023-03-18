import * as selector from '@store/result/selector';
import { resultSlice } from '@store/result/slice';

export const { convertListenerConnect } = resultSlice.actions;
export const { resultSelector } = selector;
export const resultReducer = resultSlice.reducer;
