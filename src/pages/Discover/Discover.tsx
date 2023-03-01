import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ItemsList } from "../../components";
import Loader from "../../components/Loader/Loader";
import { useSearchForMoviesOrSeriesQuery } from "../../store/api/discoverApi";
import styles from "./discover.module.scss";

const base_url = "/discover?search=";

const Discover = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") ?? "1");
  const [searchQuery, setSearchQuery] = useState(params.get("search") ?? "");
  const { data: discoverResults, isFetching } = useSearchForMoviesOrSeriesQuery(
    `${searchQuery.length > 0 ? "query=" + searchQuery : ""}&page=${page}`
  );

  useEffect(() => {
    setPage(params.get("page") ?? "1");
    setSearchQuery(params.get("search") ?? "");
  }, [params]);

  const pagination: any = useMemo(
    () => ({
      base_url: base_url + searchQuery,
      actualPage: params.get("page") ?? "1",
      totalPages:
        discoverResults?.total_pages < 500 ? discoverResults?.total_pages : 499,
    }),
    [discoverResults, params, searchQuery]
  );

  if (isFetching) return <Loader />;
  return (
    <div className={styles["discover"]}>
      <ItemsList pagination={pagination} data={discoverResults} />
    </div>
  );
};

export default React.memo(Discover);
