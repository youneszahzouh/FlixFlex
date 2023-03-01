import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

const VITE_BASE_IMG_W500 = import.meta.env.VITE_BASE_IMG_URL;

export const discoverApi = createApi({
  reducerPath: "discoverApi",
  baseQuery: fetchBaseQuery({ baseUrl: api_url }),
  tagTypes: ["Search"],
  endpoints: (builder) => ({
    searchForMoviesOrSeries: builder.query({
      query: (queryParams = "") =>
        `/search/multi?${queryParams}&api_key=${api_key}`,
      transformResponse(response: any, meta, arg) {
        const formattedMovieItems = response?.results?.map((item: any) => {
          return {
            ...item,
            backdrop_path: VITE_BASE_IMG_W500 + item?.backdrop_path,
            poster_path: VITE_BASE_IMG_W500 + item?.poster_path,
          };
        });

        return { ...response, results: formattedMovieItems };
      },
    }),
  }),
});

export const { useSearchForMoviesOrSeriesQuery } = discoverApi;
