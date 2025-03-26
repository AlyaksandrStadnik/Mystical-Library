import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, ResponseObject } from "../../utils/types";
import { BookInResponse } from "../../utils/types";

const BASE_URL_BOOKS_API = "https://openlibrary.org/search";
const BASE_JSON_URL_BOOKS_API = `${BASE_URL_BOOKS_API}.json`;

type SearchParams = {
  searchBy: {
    type: string;
    value: string;
  };
  page: number;
  pageSize: number;
};

const getSearchByParam = ({ searchBy, page, pageSize }: SearchParams) => {
  const searchParams = new URLSearchParams();

  searchParams.append("page", String(page));
  searchParams.append("limit", String(pageSize));
  if (searchBy.value !== "") searchParams.append(searchBy.type, searchBy.value);

  return searchParams;
};

const transformResponse = (response: ResponseObject) => ({
  items: response.docs.map((item: BookInResponse) => ({
    id: item.key,
    author: item.author_name ? item.author_name.join(", ") : "Unknown Creator",
    title: item.title,
    status: "unread",
    raiting: 0,
    cover: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : "/images/mystical-library.png",
  })),
  total: response.numFound,
});

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_JSON_URL_BOOKS_API }),
  endpoints: (build) => ({
    getBooksBy: build.query<{ items: Book[]; total: number }, SearchParams>({
      query: (params) => `?${getSearchByParam(params)}`,
      transformResponse,
    }),
  }),
});

export const { useGetBooksByQuery } = booksApi;
export const booksApiMiddleware = booksApi.middleware;
