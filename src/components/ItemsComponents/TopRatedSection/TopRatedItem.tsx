import React from "react";
import { Link } from "react-router-dom";
import { trimTextWithEllipsis } from "../../../helpers";

import styles from "./top-rated.module.scss";

interface Props {
  item: any;
  redirect_url: string;
}
const TopRatedItem: React.FC<Props> = ({ item, redirect_url }) => {
  const nameOrTitle = item?.title ?? item?.name ?? "";

  return (
    <Link
      key={item?.id}
      to={`${redirect_url}${item?.id}_${nameOrTitle
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <div className={styles["poster"]}>
        <img src={item?.poster_path} alt="" />
      </div>

      <div className={styles["details"]}>
        <h4>{trimTextWithEllipsis(nameOrTitle, 40)}</h4>
        <p>{item?.vote_average}</p>
      </div>
    </Link>
  );
};

export default React.memo(TopRatedItem);
