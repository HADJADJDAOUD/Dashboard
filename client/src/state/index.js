import { createSlice } from "@reduxjs/toolkit";
const getInitialMode = () => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "dark"; // Default to 'dark' if no value is saved
};

const initialState = {
  mode: getInitialMode(),
  userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode); // Save mode to localStorage
    },
    resetState: (state) => {
      state.mode = "dark"; // Reset to initial value
      localStorage.setItem("mode", state.mode); // Update localStorage
    },
  },
});

export const { setMode, resetState } = globalSlice.actions;
export default globalSlice.reducer;
