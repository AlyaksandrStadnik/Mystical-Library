import { useState } from "react";
import { Input } from "antd";
import { useLazyGetBooksByTitleQuery } from "../store/services/booksApi";
import { Book, Mode } from "../utils/types";
import BookList from "./bookList/BookList";
import MysticalSpinner from "./MysticalSpinner";
import "./Home.css";

const { Search } = Input;

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [sendRequest, { isFetching }] = useLazyGetBooksByTitleQuery();

  const handleSearch = async () => {
    const apiResult = await sendRequest(searchInput).unwrap();
    if (apiResult) setAllBooks(apiResult);
  };

  return (
    <>
      <Search
        placeholder="Search dark grimoire..."
        onSearch={handleSearch}
        onChange={(e) => setSearchInput(e.target.value)}
        className="search"
        enterButton="Seek"
      />
      {isFetching && <MysticalSpinner />}
      {!isFetching && <BookList source={allBooks} mode={Mode.ALL_BOOKS_MODE} />}
    </>
  );
};

export default Home;
