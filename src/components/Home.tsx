import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useGetBooksByQuery } from "../store/services/booksApi";
import { PAGE_SIZE } from "../utils/constants.ts";
import { AppState } from "../utils/types";
import BookList from "./bookList/BookList";
import WithPagination from "./bookList/WithPagination.tsx";
import MysticalSpinner from "./MysticalSpinner";
import EmptyList from "./bookList/EmptyList.tsx";
import MysticalSearch from "./MysticalSearch.tsx";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const { searchType, searchValue } = useSelector(
    (state: AppState) => state.searchData
  );

  useEffect(() => {
    setPage(1);
  }, [searchType, searchValue]);

  const params = useMemo(
    () => ({
      searchBy: { type: searchType, value: searchValue },
      page,
      pageSize: PAGE_SIZE,
    }),
    [page, searchValue, searchType]
  );

  const { data, isFetching } = useGetBooksByQuery(params);

  const renderContent = () => {
    if (isFetching) {
      return <MysticalSpinner />;
    }

    const items = data?.items || [];

    if (!items.length) {
      return <EmptyList />;
    }

    const total = data?.total || 0;

    return (
      <WithPagination page={page} total={total} onChange={setPage}>
        <BookList source={items} />
      </WithPagination>
    );
  };

  return (
    <>
      <MysticalSearch />
      {renderContent()}
    </>
  );
};

export default Home;
