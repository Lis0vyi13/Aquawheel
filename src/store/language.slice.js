import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: localStorage.getItem("lang") || "ENG",
  reducers: {
    changeLanguage(_, action) {
      localStorage.setItem("lang", action.payload);
      return action.payload;
    },
  },
});

export const { reducer, actions } = languageSlice;
