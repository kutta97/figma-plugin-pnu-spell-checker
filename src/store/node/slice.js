import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedNodes: [],
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    nodeListenerConnector: (state, action) => {},
    setSelectedNodes: (state, action) => {
      state.selectedNodes = action.payload;
    },
  },
});
