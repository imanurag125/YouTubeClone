import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isSideBarOpen: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSidebar: (state, action) => {
      state.isSideBarOpen = false;
    },
  },
});

export default sideBarSlice.reducer;
export const { toggleSidebar, closeSidebar } = sideBarSlice.actions;
