import { configureStore } from "@reduxjs/toolkit";
import { reducer as languageSlice } from "./language.slice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});
