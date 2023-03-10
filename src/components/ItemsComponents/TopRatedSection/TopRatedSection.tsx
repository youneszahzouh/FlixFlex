import React from "react";

import styles from "./top-rated.module.scss";
import TopRatedItem from "./TopRatedItem";

const TopRatedSection = ({ data }: { data: any }) => {
  return (
    <div className={styles["top-rated"]}>
      <h3 className={styles["title"]}>TOP RATED</h3>

      <div className={styles["list"]}>
        {data?.map((item: any) => (
          <TopRatedItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(TopRatedSection);
