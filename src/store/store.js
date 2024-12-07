import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import moviesReducer from "./reducers/moviesSlice";
import searchReducer from "./reducers/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    search: searchReducer,
  },
});

export default store;
