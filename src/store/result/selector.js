import { createSelector } from '@reduxjs/toolkit';

export const resultSelector = (state) => state.resultReducer;

export const resultCountSelector = createSelector(
  resultSelector,
  (state) => state.resultList.length
);

export const resultListSelector = createSelector(
  resultSelector,
  (state) => state.resultList
);
