import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'initial name home',
  resultList: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    convertListenerConnect: (state, action) => {},
    setResultList: (state, action) => {
      state.resultList = action.payload;
    },
  },
});
