import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT_COUNT } from "../../config";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVECHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    clearMessage: (state, action) => {
      state.messages = [];
    },
  },
});

export default chatSlice.reducer;
export const { addMessage, clearMessage } = chatSlice.actions;
