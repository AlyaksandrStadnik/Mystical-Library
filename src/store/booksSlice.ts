import { createSlice } from "@reduxjs/toolkit";
import { MY_BOOKS_LOCAL_STORAGE_KEY } from "../utils/constants";
import { BooksState } from "../utils/types";

const loadStateFromLocalStorage = () => {
  const serializedState = localStorage.getItem(MY_BOOKS_LOCAL_STORAGE_KEY);

  if (serializedState === null) return { myBooks: [] };

  return { myBooks: JSON.parse(serializedState) };
};

const initialState: BooksState = loadStateFromLocalStorage();

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state: BooksState, action) {
      state.myBooks.push(action.payload);
    },
    removeBook(state: BooksState, action) {
      state.myBooks = state.myBooks.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
