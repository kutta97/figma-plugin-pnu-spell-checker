import { createSelector } from '@reduxjs/toolkit';

export const resultSelector = (state) => state.resultReducer;

export const resultListSelector = createSelector(
  resultSelector,
  (state) => state.resultList
);

export const selectedResultCountSelector = createSelector(
  resultSelector,
  (state) => state.resultList.filter((result) => result.checked).length
);
