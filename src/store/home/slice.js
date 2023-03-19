import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'initial name home',
  filtered: [
    {
      id: 1,
      text: '맞춤법',
    },
    {
      id: 2,
      text: '띄어쓰기',
    },
  ],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    checkListenerConnect: (state, action) => {},
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});
