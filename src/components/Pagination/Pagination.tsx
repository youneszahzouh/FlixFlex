import classNames from "classnames";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import styles from "./pagination.module.scss";

export interface PaginationType {
  pagination: {
    base_url: string;
    totalPages: number;
    actualPage: number;
  };
}
const Pagination = ({ pagination }: PaginationType) => {
  const { base_url, totalPages, actualPage } = pagination;

  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  const [goToPage, setGoToPage] = useState<string | number>(actualPage);

  const changePage = useCallback(
    (next: boolean, actual: number) => {
      if (next) {
        if (actual < totalPages - 1) actual = actual + 1;
        else actual = -1;
      } else {
        if (actual > 1) {
          actual = actual - 1;
        } else actual = -1;
      }
      return actual;
    },
    [actualPage]
  );

  useEffect(() => {
    setNextPage(changePage(true, Number(actualPage)));
    setPrevPage(changePage(false, Number(actualPage)));
    setGoToPage(Number(actualPage));
  }, [actualPage]);

  return (
    <div className={styles["pagination"]}>
      <Link
        to={`${base_url}&page=${prevPage}`}
        className={classNames(
          styles["direction"],
          prevPage < 0 ? styles["disabled"] : ""
        )}
      >
        {"<"}
      </Link>

      <div className={styles["page-input"]}>
        <input
          type="text"
          value={goToPage}
          onChange={(e) => {
            setGoToPage(e.target.value);
          }}
        />
        <Link to={`${base_url}&page=${goToPage}`} className={styles["goto"]}>
          Go
        </Link>
      </div>

      <Link
        to={`${base_url}&page=${nextPage}`}
        className={classNames(
          styles["direction"],
          nextPage < 0 ? styles["disabled"] : ""
        )}
      >
        {">"}
      </Link>
    </div>
  );
};

export default React.memo(Pagination);
