import * as selector from '@store/result/selector';
import { resultSlice } from '@store/result/slice';

export const {
  convertListenerConnect,
  setResultList,
  toggleAllResultSelection,
  toggleResultSelection,
} = resultSlice.actions;
export const {
  resultSelector,
  resultListSelector,
  selectedResultCountSelector,
} = selector;
export const resultReducer = resultSlice.reducer;
