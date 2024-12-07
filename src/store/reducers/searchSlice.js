import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  searchResults: [],
  loading: true,
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
    setLoading(state) {
      state.loading = false;
    },
  },
});

export default searchSlice.reducer;
export const { setLoading, setSearchQuery, setSearchResults } =
  searchSlice.actions;
