import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { ItemDetails } from "../../components";
import {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
} from "../../store/api/movieApi";

const MovieDetails = () => {
  const { id } = useParams();

  const { data: itemDetails, isFetching } = useGetMovieDetailsQuery(id ?? "", {
    skip: typeof id !== "string",
  });

  const { data: movieVideos, isFetching: isMovieVideosFetching } =
    useGetMovieVideosQuery(id ?? "", {
      skip: typeof id !== "string",
    });

  if (isFetching) return <Loader />;

  return <ItemDetails itemDetails={itemDetails} itemVideos={movieVideos} />;
};

export default React.memo(MovieDetails);
