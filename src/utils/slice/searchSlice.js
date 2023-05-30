import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
      // console.log();
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
