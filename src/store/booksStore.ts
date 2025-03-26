import { configureStore, Middleware } from "@reduxjs/toolkit";
import { AppState } from "../utils/types.ts";
import { booksReducer } from "./booksSlice";
import { booksApi, booksApiMiddleware } from "./services/booksApi";
import { MY_BOOKS_LOCAL_STORAGE_KEY } from "../utils/constants";
import { searchReducer } from "./searchSlice.ts";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const localStorageMiddleware: Middleware<{}, AppState> =
  (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();

    localStorage.setItem(
      MY_BOOKS_LOCAL_STORAGE_KEY,
      JSON.stringify(state.books.myBooks)
    );

    return result;
  };

const myBooksStore = configureStore({
  reducer: {
    books: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    searchData: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApiMiddleware, localStorageMiddleware]),
});

export default myBooksStore;
