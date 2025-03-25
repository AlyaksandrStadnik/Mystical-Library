import BookList from "./bookList/BookList.tsx";
import { useSelector } from "react-redux";
import { AppState, Mode } from "../utils/types.ts";

const MyBooks = () => {
  const myBooks = useSelector((state: AppState) => state.books.myBooks);

  return <BookList source={myBooks} mode={Mode.MY_BOOK_MODE} />;
};

export default MyBooks;
