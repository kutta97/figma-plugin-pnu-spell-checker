import { createSelector } from '@reduxjs/toolkit';

export const nodeSelector = (state) => state.nodeReducer;

export const totalSelectedNodeCountSelector = createSelector(
  nodeSelector,
  (state) => state.selectedNodes.length
);

export const selectedNodeCountsSelector = createSelector(
  nodeSelector,
  (state) => ({
    text: state.selectedNodes.filter((node) => node.type === 'TEXT').length,
    frame: state.selectedNodes.filter((node) => node.type === 'FRAME').length,
  })
);
