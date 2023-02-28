import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./movies-list.module.scss";

const MovieList = ({ data }: { data: any }) => {
  return (
    <div className={styles["movies-list"]}>
      {data?.results?.map((movieItem: any, index: number) => (
        <MovieItem key={index} item={movieItem} />
      ))}
    </div>
  );
};

export default React.memo(MovieList);
