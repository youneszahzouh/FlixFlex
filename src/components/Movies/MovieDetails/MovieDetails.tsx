import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../../store/api/movieapi";
import styles from "./movie-details.module.scss";
const MovieDetails = () => {
  const { id } = useParams();

  console.log(
    "%cMovieDetails.tsx line:7 id",
    "color: white; background-color: #007acc;",
    id
  );

  const { data: movieDetails, isFetching } = useGetMovieDetailsQuery(id ?? "", {
    skip: typeof id !== "string",
  });

  console.log(
    "%cMovieDetails.tsx line:16 movieDetails",
    "color: white; background-color: #007acc;",
    movieDetails
  );
  return (
    <div className={styles["movie-details"]}>
      <div className={styles["poster"]}>
        <img src={movieDetails?.poster_path} alt="" />
      </div>
      <div className={styles["details"]}>
        <div className={styles["title"]}>
          <h4>The Vampire</h4>
          <p>The Vampire</p>
        </div>

        <div className={styles["plot"]}>
          <p>
            From his deathbed, Hero-King Inglis, the divine knight and master of
            all he surveys, gazes down on the empire he built with his mighty
            hand. Having devoted his life to statecraft and his subjects'
            well-being, his one unfulfilled wish is to live again, for himself
            this time: a warrior's life he'd devoted himself to before his rise
            to power. His patron goddess, Alistia, hears his plea and smiles
            upon him, flinging his soul into the far future. Goddesses work in
            mysterious ways—not only is Inglis now the daughter of a minor noble
            family, but at her first coming-of-age ceremony at 6, she's found
            ineligible to begin her knighthood! However, for a lady of Inglis's
            ambition, this is less a setback and more the challenge she was
            (re)born to overcome. "It's not the blood that runs through your
            veins that makes a knight; it's the blood you shed on the
            battlefield!" The curtain rises on the legend of an extraordinary
            lady squire reborn to master the blade!
          </p>
        </div>
        {/* 
        <div className={styles["information"]}>
          <p>The Vampire</p>
        </div> */}
      </div>
    </div>
  );
};

export default React.memo(MovieDetails);
