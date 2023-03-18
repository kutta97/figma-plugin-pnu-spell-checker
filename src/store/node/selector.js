import { createSelector } from '@reduxjs/toolkit';

export const nodeSelector = (state) => state.nodeReducer;

export const totalSelectedNodeCountSelector = createSelector(
  nodeSelector,
  (state) => state.selectedNodes.length
);

export const selectedNodeCountsSelector = createSelector(
  nodeSelector,
  (state) => ({
    text: state.selectedNodes.reduce((acc, cur) => {
      if (cur.type === 'TEXT') return acc + 1;
      if (cur.type === 'FRAME') return acc + cur.children.length;
      return acc;
    }, 0),
    frame: state.selectedNodes.filter((node) => node.type === 'FRAME').length,
  })
);
