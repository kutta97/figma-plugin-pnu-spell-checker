import { createSlice } from '@reduxjs/toolkit';

import { PAGE_TYPE } from '@consts/index';

const initialState = {
  pageType: PAGE_TYPE.HOME,
  pageHistory: [],
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    rootListenerConnector: (state, action) => {},
    nextPage: (state, action) => {
      state.pageHistory = [...state.pageHistory, state.pageType];
      state.pageType = action.payload;
    },
    prevPage: (state, _) => {
      const prevPage = state.pageHistory[state.pageHistory.length - 1];
      state.pageHistory = state.pageHistory.slice(0, -1);
      state.pageType = prevPage;
    },
    pageClear: (state, _) => {
      state.pageType = PAGE_TYPE.HOME;
      state.pageHistory = [];
    },
  },
});
