import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'initial name home',
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
