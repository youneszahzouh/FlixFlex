import React from "react";
import { Link } from "react-router-dom";
import { trimTextWithEllipsis } from "../../../helpers";

import styles from "./top-rated.module.scss";

interface Props {
  item: any;
}
const TopRatedItem: React.FC<Props> = ({ item }) => {
  const nameOrTitle = item?.title ?? item?.name ?? "";

  return (
    <Link
      key={item?.id}
      to={`${item?.title ? "/movies/" : "/tvseries/"}${item?.id}_${nameOrTitle
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <div className={styles["poster"]}>
        <img loading="lazy" src={item?.poster_path} alt="" />
      </div>

      <div className={styles["details"]}>
        <h4>{trimTextWithEllipsis(nameOrTitle, 40)}</h4>
        <p>{item?.vote_average}</p>
      </div>
    </Link>
  );
};

export default React.memo(TopRatedItem);
