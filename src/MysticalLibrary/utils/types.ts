import { booksApi } from "../store/services/booksApi";

export type BookListProps = {
  source: Book[];
  mode: Mode;
};

export type BookListItemProps = {
  id: number;
  title: string;
  author: string;
  status: string;
  cover: string;
  mode: Mode;
};

export type BookListHeaderProps = {
  mode: Mode;
};

export type BooksState = { myBooks: Book[] };

export type AppState = {
  books: BooksState;
  booksApi: ReturnType<typeof booksApi.reducer>;
};

export type Book = {
  id: number;
  author: string;
  title: string;
  status: string;
  cover: string;
};

export type BookInResponse = {
  id: number;
  author_name: string[];
  title: string;
  cover_i: number;
};

export type ResponseObject = {
  docs: BookInResponse[];
};

export enum Mode {
  ALL_BOOKS_MODE,
  MY_BOOK_MODE,
}
