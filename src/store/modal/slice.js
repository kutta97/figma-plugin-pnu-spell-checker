import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  isVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.type = action.payload;
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});
