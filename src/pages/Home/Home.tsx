import React from "react";
import MovieList from "../../components/Movies/MoviesList/MovieList";
import TopRatedSection from "../../components/Movies/TopRatedSection/TopRatedSection";
import {
  useGetMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../../store/api/movieapi";
import styles from "./home.module.scss";

const Home = () => {
  const { data: latestMovies, isFetching } = useGetMoviesQuery("");
  const { data: topRatedMovies, isFetching: isTopRatedMoviesFetching } =
    useGetTopRatedMoviesQuery("");

  return (
    <div className={styles["home"]}>
      <MovieList data={latestMovies} />
      <TopRatedSection data={topRatedMovies?.results} />
    </div>
  );
};

export default React.memo(Home);
