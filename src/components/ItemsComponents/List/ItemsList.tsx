import React from "react";
import Pagination from "../../Pagination/Pagination";
import ItemCard from "../ItemCard/Item-card";
import styles from "./items-list.module.scss";

const ItemsList = ({ data, pagination }: { data: any; pagination: any }) => {
  return (
    <div className={styles["items-listing"]}>
      <div className={styles["list"]}>
        {data?.results?.map((movieItem: any) => (
          <ItemCard key={movieItem?.id} item={movieItem} />
        ))}
      </div>

      <Pagination pagination={pagination} />
    </div>
  );
};

export default React.memo(ItemsList);
