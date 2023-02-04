import { createSelector } from '@reduxjs/toolkit';

export const homeSelector = (state) => state.homeReducer;

export const homeNameSelector = createSelector(
  homeSelector,
  (state) => state.name
);
