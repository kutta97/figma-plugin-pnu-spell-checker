import { createSelector } from '@reduxjs/toolkit';

export const homeSelector = (state) => state.homeReducer;

export const homeNameSelector = createSelector(
  homeSelector,
  (state) => state.name
);

export const homeFilterSelector = createSelector(
  homeSelector,
  (state) => state.filtered
);
