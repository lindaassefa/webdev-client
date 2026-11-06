import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (state) => {
      state.count += 1;
    },
    down: (state) => {
      state.count -= 1;
    },
    resetCount: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
