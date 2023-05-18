import { createSelector } from '@reduxjs/toolkit';

export const nodeSelector = (state) => state.nodeReducer;

export const totalSelectedNodeCountSelector = createSelector(
  nodeSelector,
  (state) => state.selectedNodes.length
);

export const selectedTextNodeValueSelector = createSelector(
  nodeSelector,
  (state) => state.selectedNodes[0].value
);
