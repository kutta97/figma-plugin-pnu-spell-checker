import { createSlice } from '@reduxjs/toolkit';

import { PAGE_TYPE } from '../../../consts';

const initialState = {
  name: 'initial name home',
  pageType: PAGE_TYPE.MAIN,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    homeListenerConnector: (state, action) => {},
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});
