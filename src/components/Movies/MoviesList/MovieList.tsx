import React from "react";
import { useGetMoviesQuery } from "../../../store/api/movieapi";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./movies-list.module.scss";

const MovieList = () => {
  const { data: latestMovies, isFetching } = useGetMoviesQuery("");

  return (
    <div className={styles["movies-list"]}>
      {latestMovies?.results?.map((movieItem: any, index: number) => (
        <MovieItem key={index} item={movieItem} />
      ))}
    </div>
  );
};

export default React.memo(MovieList);
