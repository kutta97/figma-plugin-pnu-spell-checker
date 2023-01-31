import { createSelector } from '@reduxjs/toolkit';

export const homeSelector = (state) => state.homeVM;

export const homeNameSelector = createSelector(
  homeSelector,
  (state) => state.name
);
