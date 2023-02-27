import React from "react";
import styles from "./movie-item.module.scss";
import { AiOutlinePlayCircle } from "react-icons/ai";

interface MovieItemType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {
  item: MovieItemType;
}
const MovieItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles["movie-item"]}>
      <div className={styles["movie-cover"]}>
        <img src={item?.backdrop_path} alt="" />
        <div className={styles["overlay"]}>
          <AiOutlinePlayCircle />
        </div>
      </div>
      <h4 className={styles["movie-title"]}>{item?.title}</h4>
    </div>
  );
};

export default React.memo(MovieItem);
