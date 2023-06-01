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
      const results = action.payload;
      state.resultList = results.map((result) => {
        return { ...result, checked: false };
      });
    },
    toggleAllResultSelection: (state, action) => {
      const isChecked = action.payload;
      state.resultList = state.resultList.map((result) => {
        return { ...result, checked: isChecked };
      });
    },
    toggleResultSelection: (state, action) => {
      const id = action.payload;
      state.resultList = state.resultList.map((result) => {
        return result.id === id
          ? { ...result, checked: !result.checked }
          : result;
      });
    },
  },
});
