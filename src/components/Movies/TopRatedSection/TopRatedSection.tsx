import React from "react";
import { Link } from "react-router-dom";
import { trimTextWithEllipsis } from "../../../helpers";

import styles from "./top-rated.module.scss";

const TopRatedSection = ({ data }: { data: any }) => {
  return (
    <div className={styles["top-rated"]}>
      <h3 className={styles["title"]}>TOP RATED</h3>

      <div className={styles["list"]}>
        {data?.map((item: any) => (
          <Link to="/login">
            <div className={styles["poster"]}>
              <img src={item?.poster_path} alt="" />
            </div>

            <div className={styles["details"]}>
              <h4>{trimTextWithEllipsis(item?.title, 40)}</h4>
              <p>{item?.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TopRatedSection);
