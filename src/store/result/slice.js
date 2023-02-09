import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'initial name home',
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    convertListenerConnect: (state, action) => {},
  },
});
