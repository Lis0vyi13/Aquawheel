import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: false,
  reducers: {
    toggleForm(state) {
      return !state;
    },
  },
});

export const { reducer, actions } = formSlice;
