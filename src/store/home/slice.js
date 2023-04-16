import { createSlice } from '@reduxjs/toolkit';

import { FILTER } from '@consts/index';

const initialState = {
  name: 'initial name home',
  filtered: [FILTER.SPELL, FILTER.SPACE],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    checkListenerConnect: (state, action) => {},
    setName: (state, action) => {
      state.name = action.payload;
    },
    setFilter: (state, action) => {
      state.filtered = action.payload;
    },
  },
});
