import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: false,
  reducers: {
    toggleBurger(state) {
      return !state;
    },
  },
});

export const { reducer, actions } = burgerSlice;
