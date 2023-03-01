import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ItemsList, TopRatedSection } from "../../components";
import Loader from "../../components/Loader/Loader";
import {
  useGetTopRatedTvSeriesQuery,
  useGetTvSeriesQuery,
} from "../../store/api/tvSeriesApi";
import styles from "./tv-series.module.scss";

const base_url = "/tvSeries";

const TvSeries = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") ?? "1");
  const { data: latestTvSeries, isFetching } = useGetTvSeriesQuery(
    `page=${page}`
  );
  const { data: topRatedTvSeries, isFetching: isTopRatedTvSeriesFetching } =
    useGetTopRatedTvSeriesQuery("");

  useEffect(() => {
    setPage(params.get("page") ?? "1");
  }, [params]);

  const pagination: any = useMemo(
    () => ({
      base_url,
      actualPage: params.get("page") ?? "1",
      totalPages:
        latestTvSeries?.total_pages < 500 ? latestTvSeries?.total_pages : 499,
    }),
    [latestTvSeries, params]
  );

  if (isFetching) return <Loader />;
  return (
    <div className={styles["tv-series"]}>
      <ItemsList
        pagination={pagination}
        data={latestTvSeries}
        redirect_url={"/tvserie/"}
      />
      <TopRatedSection
        data={topRatedTvSeries?.results}
        redirect_url={"/tvserie/"}
      />
    </div>
  );
};

export default React.memo(TvSeries);
