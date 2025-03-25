import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./booksSlice";
import { booksApi, booksApiMiddleware } from "./services/booksApi";
import { MY_BOOKS_LOCAL_STORAGE_KEY } from "../utils/constants";

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApiMiddleware, localStorageMiddleware]),
});

export default myBooksStore;
