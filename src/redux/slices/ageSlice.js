import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: "age",
  initialState: {
    value: "0",
    isDarkModeOn: false,
    bannerScrolled: true,
  },
  reducers: {
    addStep: (state, action) => {
      state.value = parseInt(action.payload ? action.payload : 0).toString();
    },
    setTheme: (state, action) => {
      console.log("payload here", action.payload);
      state = {
        ...state,
        isDarkModeOn: action.payload,
      };
    },
    enableBanner: (state, action) => {
      console.log("payload here", action.payload);
      state = {
        ...state,
        bannerScrolled: action.payload,
      };
    },
  },
});

// ACTIONS export
export const { addStep, setTheme, enableBanner } = ageSlice.actions;
export default ageSlice.reducer;
