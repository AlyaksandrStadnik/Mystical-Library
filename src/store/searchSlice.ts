import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../utils/types";

const initialState: SearchState = { searchType: "title", searchInput: "" };

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    setSearchData(state: SearchState, action) {
      console.log(action.payload);
      state.searchInput = action.payload?.searchInput || state.searchInput;
      state.searchType = action.payload?.searchType || state.searchType;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
