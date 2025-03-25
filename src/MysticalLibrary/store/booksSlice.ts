import { createSlice } from "@reduxjs/toolkit";
import { BooksState } from "../utils/types";
import { MY_BOOKS_LOCAL_STORAGE_KEY } from "../utils/constants";

const loadStateFromLocalStorage = () => {
  const serializedState = localStorage.getItem(MY_BOOKS_LOCAL_STORAGE_KEY);

  if (serializedState === null) return { myBooks: [] };

  const deSerializedState = { myBooks: JSON.parse(serializedState) };

  return deSerializedState;
};

const initialState: BooksState = loadStateFromLocalStorage();

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state: BooksState, action) {
      return { myBooks: [...state.myBooks, action.payload] };
    },
    removeBook(state: BooksState, action) {
      return {
        myBooks: [...state.myBooks].filter(
          (item) => item.title !== action.payload.title
        ),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
