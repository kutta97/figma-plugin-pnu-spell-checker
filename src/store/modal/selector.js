import { createSelector } from '@reduxjs/toolkit';

export const modalSelector = (state) => state.modalReducer;

export const modalTypeSelector = createSelector(
  modalSelector,
  (state) => state.type
);

export const modalVisibleSelector = createSelector(
  modalSelector,
  (state) => state.isVisible
);
