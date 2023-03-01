import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { ItemDetails } from "../../components";
import {
  useGetTvSerieDetailsQuery,
  useGetTvSerieVideosQuery,
} from "../../store/api/tvSeriesApi";

const TvSerieDetails = () => {
  const { id } = useParams();

  const { data: itemDetails, isFetching } = useGetTvSerieDetailsQuery(
    id ?? "",
    {
      skip: typeof id !== "string",
    }
  );

  const { data: tvSerieVideos, isFetching: isTvSerieVideosFetching } =
    useGetTvSerieVideosQuery(id ?? "", {
      skip: typeof id !== "string",
    });

  if (isFetching) return <Loader />;

  return <ItemDetails itemDetails={itemDetails} itemVideos={tvSerieVideos} />;
};

export default React.memo(TvSerieDetails);
