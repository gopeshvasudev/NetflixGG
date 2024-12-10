import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  searchResults: null,
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearSearch(state) {
      state.searchResults = null;
      state.searchQuery = "";
      state.loading = false;
      state.error = null;
    },
  },
});

export default searchSlice.reducer;
export const {
  setLoading,
  setSearchQuery,
  setSearchResults,
  clearSearch,
  setError,
} = searchSlice.actions;
