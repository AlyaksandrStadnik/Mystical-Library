import { Mode } from "./types";
import { ADD_TITLE, REMOVE_TITLE } from "./constants";
import { addBook, removeBook } from "../store/booksSlice";

export const resolveBookListItemButtonValues = (mode: Mode) => {
  switch (mode) {
    case Mode.ALL_BOOKS_MODE:
      return { buttonTitle: ADD_TITLE, buttonAction: addBook };
    case Mode.MY_BOOK_MODE:
      return { buttonTitle: REMOVE_TITLE, buttonAction: removeBook };
    default:
      throw new Error(`Not supported enum value - ${mode}`);
  }
};
