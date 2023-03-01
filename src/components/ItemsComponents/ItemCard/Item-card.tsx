import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { trimTextWithEllipsis } from "../../../helpers";
import { Link, useNavigate } from "react-router-dom";

import styles from "./item-card.module.scss";
interface ItemCardType {
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
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Props {
  item: ItemCardType;
}
const ItemCard: React.FC<Props> = ({ item }) => {
  const nameOrTitle = item?.title ?? item?.name ?? "";
  return (
    <Link
      className={styles["item-card"]}
      to={`${item?.title ? "/movies/" : "/tvseries/"}${item?.id}_${nameOrTitle
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <div className={styles["backdrop"]}>
        <img loading="lazy" src={item?.poster_path} alt="" />
        <p className={styles["vote-average"]}>{item?.vote_average}</p>
        <div className={styles["overlay"]}>
          <AiOutlinePlayCircle />
        </div>
      </div>
      <h4 className={styles["title"]}>
        {trimTextWithEllipsis(nameOrTitle, 30)}
      </h4>
    </Link>
  );
};

export default React.memo(ItemCard);
