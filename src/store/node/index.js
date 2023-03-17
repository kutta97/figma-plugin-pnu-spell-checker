import * as selector from '@store/node/selector';
import { nodeSlice } from '@store/node/slice';

export const { nodeListenerConnector, setSelectedNodes } = nodeSlice.actions;
export const {
  nodeSelector,
  totalSelectedNodeCountSelector,
  selectedNodeCountsSelector,
} = selector;
export const nodeReducer = nodeSlice.reducer;