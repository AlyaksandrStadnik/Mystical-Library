import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../utils/types";

const initialState: SearchState = { searchType: "title", searchValue: "" };

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    setSearchData(state: SearchState, action) {
      const { searchValue = state.searchValue, searchType = state.searchType } =
        action.payload;
      state.searchValue = searchValue;
      state.searchType = searchType;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
