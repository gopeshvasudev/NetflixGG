import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  movieDetails: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },

    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },

    addUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },

    addMovieDetails(state, action) {
      state.movieDetails = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDetails,
} = moviesSlice.actions;
