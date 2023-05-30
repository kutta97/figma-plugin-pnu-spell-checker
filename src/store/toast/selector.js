import { createSelector } from '@reduxjs/toolkit';

export const toastSelector = (state) => state.toastReducer;

export const toastMessageSelector = createSelector(
  toastSelector,
  (state) => state.message
);

export const toastVisibleSelector = createSelector(
  toastSelector,
  (state) => state.isVisible
);
