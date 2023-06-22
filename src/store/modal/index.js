import * as selector from '@store/modal/selector';
import { modalSlice } from '@store/modal/slice';

export const { showModal, hideModal } = modalSlice.actions;
export const { modalTypeSelector, modalVisibleSelector } = selector;
export const modalReducer = modalSlice.reducer;
