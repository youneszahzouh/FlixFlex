import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
} from "../../../store/api/movieapi";
import Loader from "../../Loader/Loader";

import styles from "./movie-details.module.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const { data: movieDetails, isFetching } = useGetMovieDetailsQuery(id ?? "", {
    skip: typeof id !== "string",
  });

  const { data: movieVideos, isFetching: isMovieVideosFetching } =
    useGetMovieVideosQuery(id ?? "", {
      skip: typeof id !== "string",
    });

  console.log(
    "%cMovieDetails.tsx line:16 movieDetails",
    "color: white; background-color: #007acc;",
    movieVideos
  );

  if (isFetching) return <Loader />;

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["movie-trailer"]}>
        <h4>Trailer </h4>

        {isMovieVideosFetching ? (
          <Loader />
        ) : (
          <ReactPlayer
            className="react-player"
            url={movieVideos?.url}
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className={styles["movie-information"]}>
        <div className={styles["poster"]}>
          <img src={movieDetails?.poster_path} alt="" />
        </div>
        <div className={styles["details"]}>
          <div className={styles["title"]}>
            <h4>{movieDetails?.title}</h4>
            <p>{movieDetails?.tagline}</p>
            {/* <p>{movieDetails?.original_language}</p> */}
          </div>

          <div className={styles["plot"]}>
            <p>{movieDetails?.overview}</p>
          </div>

          <div className={styles["information"]}>
            <ul>
              <li>
                homepage:
                <a href={movieDetails?.homepage}>{movieDetails?.homepage}</a>
              </li>
              <li>
                Date aired: <span>{movieDetails?.release_date}</span>
              </li>
              <li>
                Status: <span>{movieDetails?.status}</span>
              </li>
              <li>
                Genre:
                <div className={styles["genres"]}>
                  {movieDetails?.genres?.map((genre: any) => (
                    <span key={genre?.id}>{genre?.name},</span>
                  ))}
                </div>
              </li>
            </ul>

            <ul>
              <li>
                Vote average: <span>{movieDetails?.vote_average}</span>
              </li>
              <li>
                Duration:
                <span>{movieDetails?.runtime} min</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieDetails);
