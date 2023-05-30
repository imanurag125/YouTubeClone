import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slice/sidebarSlice";
import searchSlice from "./slice/searchSlice";
import chatSlice from "./slice/chatSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
