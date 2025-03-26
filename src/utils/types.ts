import { booksApi } from "../store/services/booksApi";

export type BookListHeaderProps = {
  mode: Mode;
};

export type BooksState = { myBooks: Book[] };

export type SearchState = { searchType: string; searchInput: string };

export type AppState = {
  books: BooksState;
  searchData: SearchState;
  [booksApi.reducerPath]: ReturnType<typeof booksApi.reducer>;
};

export type Book = {
  id: number;
  author: string;
  title: string;
  status?: string;
  cover: string;
  rating?: number;
};

export type BookInResponse = {
  key: number;
  author_name: string[];
  title: string;
  cover_i: number;
};

export type ResponseObject = {
  docs: BookInResponse[];
  numFound: number;
};

export enum Mode {
  ALL_BOOKS_MODE,
  MY_BOOK_MODE,
}
