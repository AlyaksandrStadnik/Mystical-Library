import BookList from "./bookList/BookList.tsx";
import EmptyList from "./bookList/EmptyList.tsx";
import { useSelector } from "react-redux";
import { AppState } from "../utils/types.ts";

const MyBooks = () => {
  const myBooks = useSelector((state: AppState) => state.books.myBooks);

  if (!myBooks.length) {
    return <EmptyList />;
  }

  return <BookList source={myBooks} />;
};

export default MyBooks;
