import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, ResponseObject } from "../../utils/types";
import { BookInResponse } from "../../utils/types";

const BASE_URL_BOOKS_API = "https://openlibrary.org/search";
const BASE_JSON_URL_BOOKS_API = `${BASE_URL_BOOKS_API}.json`;

const getSearchParamByAuthor = (author: string) => {
  const searchParamByAuthor = new URLSearchParams();
  searchParamByAuthor.append("author", author);

  return searchParamByAuthor.toString();
};

const getSearchParamByTitle = (title: string) => {
  const searchParamByTitle = new URLSearchParams();
  searchParamByTitle.append("title", title);

  return searchParamByTitle.toString();
};

const transformResponse = (response: ResponseObject) =>
  response.docs.map((item: BookInResponse) => ({
    id: item.id,
    author: item.author_name ? item.author_name.join(", ") : "Unknwon Creator",
    title: item.title,
    status: "",
    cover: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : "/images/mystical-library.png",
  }));

export const booksApi = createApi({
  reducerPath: "myBooksApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_JSON_URL_BOOKS_API }),
  endpoints: (build) => ({
    getBooksByTitle: build.query<Book[], string>({
      query: (title) => `?${getSearchParamByTitle(title)}`,
      transformResponse: (response: ResponseObject) =>
        transformResponse(response),
    }),
    getBooksByAuthor: build.query<Book[], string>({
      query: (author) => `?${getSearchParamByAuthor(author)}`,
      transformResponse: (response: ResponseObject) =>
        transformResponse(response),
    }),
  }),
});

export const { useLazyGetBooksByAuthorQuery, useLazyGetBooksByTitleQuery } =
  booksApi;
export const booksApiMiddleware = booksApi.middleware;
