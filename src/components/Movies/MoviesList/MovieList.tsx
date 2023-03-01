import React from "react";
import Pagination from "../../Pagination/Pagination";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./movies-list.module.scss";

const MovieList = ({ data, pagination }: { data: any; pagination: any }) => {
  return (
    <div className={styles["items-listing"]}>
      <div className={styles["list"]}>
        {data?.results?.map((movieItem: any, index: number) => (
          <MovieItem key={index} item={movieItem} />
        ))}
      </div>

      <Pagination pagination={pagination} />
    </div>
  );
};

export default React.memo(MovieList);
