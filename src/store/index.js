import { configureStore } from "@reduxjs/toolkit";
import { reducer as languageSlice } from "./language.slice";
import { reducer as burgerSlice } from "./burger.slice";
import { reducer as formSlice } from "./form.slice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    burger: burgerSlice,
    form: formSlice,
  },
});
