import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_url = import.meta.env.VITE_BASE_URL;
const api_key = "f62888504de69414d884fba13ee25852";

const VITE_API_KEY = "f62888504de69414d884fba13ee25852";
const VITE_BASE_URL = "https://api.themoviedb.org/3/";
const VITE_BASE_IMG_W500 = "https://image.tmdb.org/t/p/w500";
const VITE_BASE_IMG_ORIGINAL = "https://image.tmdb.org/t/p/w500";
const VITE_IMG_PLACEHOLDER =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (queryParams = "") =>
        `/movie/popular?api_key=${api_key}&${queryParams}`,
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

export const { useGetMoviesQuery } = movieApi;
