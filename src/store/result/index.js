import * as selector from '@store/result/selector';
import { resultSlice } from '@store/result/slice';

export const { convertListenerConnect, setResultList } = resultSlice.actions;
export const { resultSelector, resultCountSelector, resultListSelector } =
  selector;
export const resultReducer = resultSlice.reducer;
