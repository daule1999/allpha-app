import { createSlice } from "@reduxjs/toolkit";
import { mytheme } from "../initialState";
export const ageSlice = createSlice({
  name: "mytheme",
  initialState: { bannerScrolled: false },
  reducers: {
    getTheme: (state, action) => {
      return state.value;
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
export const { getTheme, setTheme, enableBanner } = ageSlice.actions;
export default ageSlice.reducer;
