/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    title: '',
    preheader: '',
    width: 660,
    minWidth: 480,
    maxWidth: 720,
    widthStep: 10,
  },
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    removeTitle: (state) => {
      state.title = '';
    },
    addPreheader: (state, action) => {
      state.preheader = action.payload;
    },
    removePreheader: (state) => {
      state.preheader = '';
    },
    decrementWidth: (state) => {
      if (state.width > state.minWidth) {
        state.width -= state.widthStep;
      }
    },
    incrementWidth: (state) => {
      if (state.width < state.maxWidth) {
        state.width += state.widthStep;
      }
    },
  },
});
