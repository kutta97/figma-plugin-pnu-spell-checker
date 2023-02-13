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
    /**
     *
     * @param state
     * @param action { page, isNotRecord }
     */
    nextPage: (state, action) => {
      const { isNotRecord, page } = action.payload;
      if (!isNotRecord) {
        state.pageHistory = [...state.pageHistory, state.pageType];
      }
      state.pageType = page;
    },
    prevPage: (state, _) => {
      const prevPage =
        state.pageHistory[state.pageHistory.length - 1] || PAGE_TYPE.HOME;
      state.pageHistory = state.pageHistory.slice(0, -1);
      state.pageType = prevPage;
    },
    pageClear: (state, _) => {
      state.pageType = PAGE_TYPE.HOME;
      state.pageHistory = [];
    },
  },
});
