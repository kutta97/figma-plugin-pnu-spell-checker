import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'initial name home',
  resultList: [],
  resultsWithMultipleRecommendList: [],
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    convertListenerConnect: (state, action) => {},
    setResultList: (state, action) => {
      const { results, resultsWithMultipleRecommends } = action.payload;

      state.resultList = results.map((result) => {
        return { ...result, checked: false };
      });
      state.resultsWithMultipleRecommendList =
        resultsWithMultipleRecommends.map((result) => result);
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
