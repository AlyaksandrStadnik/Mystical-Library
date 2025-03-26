import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../utils/types";

const initialState: SearchState = { searchType: "title", searchInput: "" };

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    setSearchData(state: SearchState, action) {
      const { searchInput = state.searchInput, searchType = state.searchType } =
        action.payload;
      state.searchInput = searchInput;
      state.searchType = searchType;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
