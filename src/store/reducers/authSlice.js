import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },

    removeUser(state) {
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
