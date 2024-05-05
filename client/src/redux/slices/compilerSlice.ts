import {createSlice } from "@reduxjs/toolkit";
import {PayloadAction } from "@reduxjs/toolkit/react";

const initialState = {
  html: "",
  css: "",
  javascript: "",
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    // in reducer we make function which will make the changes with the languages

    updateCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
