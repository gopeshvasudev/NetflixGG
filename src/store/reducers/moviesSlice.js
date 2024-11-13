import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies } = moviesSlice.actions;
