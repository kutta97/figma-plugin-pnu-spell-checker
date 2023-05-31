import * as selector from '@store/toast/selector';
import { toastSlice } from '@store/toast/slice';

export const { showToast, hideToast } = toastSlice.actions;
export const { toastMessageSelector, toastVisibleSelector } = selector;
export const toastReducer = toastSlice.reducer;
