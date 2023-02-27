import React from "react";
import styles from "./movie-item.module.scss";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { trimTextWithEllipsis } from "../../../helpers";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div
      className={styles["movie-item"]}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate(`/movies/${item.id}`);
      }}
    >
      <div className={styles["backdrop"]}>
        <img src={item?.poster_path} alt="" />
        <p className={styles["vote-average"]}>{item?.vote_average}</p>
        <div className={styles["overlay"]}>
          <AiOutlinePlayCircle />
        </div>
      </div>
      <h4 className={styles["title"]}>
        {trimTextWithEllipsis(item?.title, 30)}
      </h4>
    </div>
  );
};

export default React.memo(MovieItem);
