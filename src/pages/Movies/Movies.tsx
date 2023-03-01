import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ItemsList, TopRatedSection } from "../../components";
import Loader from "../../components/Loader/Loader";
import {
  useGetMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../../store/api/movieApi";
import styles from "./movies.module.scss";

const base_url = "/movies?";

const Movies = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") ?? "1");
  const { data: latestMovies, isFetching } = useGetMoviesQuery(`page=${page}`);
  const { data: topRatedMovies, isFetching: isTopRatedMoviesFetching } =
    useGetTopRatedMoviesQuery("");

  useEffect(() => {
    setPage(params.get("page") ?? "1");
  }, [params]);

  const pagination: any = useMemo(
    () => ({
      base_url,
      actualPage: params.get("page") ?? "1",
      totalPages:
        latestMovies?.total_pages < 500 ? latestMovies?.total_pages : 499,
    }),
    [latestMovies, params]
  );

  if (isFetching) return <Loader />;
  return (
    <div className={styles["movies"]}>
      <ItemsList pagination={pagination} data={latestMovies} />
      <TopRatedSection data={topRatedMovies?.results} />
    </div>
  );
};

export default React.memo(Movies);
