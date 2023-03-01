import React from "react";
import ReactPlayer from "react-player";

import styles from "./item-details.module.scss";

const ItemDetails = ({ itemDetails, itemVideos }: any) => {
  const nameOrTitle = itemDetails?.title ?? itemDetails?.name ?? "";

  return (
    <div className={styles["item-details"]}>
      <div className={styles["item-trailer"]}>
        <h4>Trailer </h4>

        <ReactPlayer
          className="react-player"
          url={itemVideos?.url}
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles["item-information"]}>
        <div className={styles["poster"]}>
          <img loading="lazy" src={itemDetails?.poster_path} alt="poster" />
        </div>
        <div className={styles["details"]}>
          <div className={styles["title"]}>
            <h4>{nameOrTitle}</h4>
            <p>{itemDetails?.tagline}</p>
            {/* <p>{itemDetails?.original_language}</p> */}
          </div>

          <div className={styles["plot"]}>
            <p>{itemDetails?.overview}</p>
          </div>

          <div className={styles["information"]}>
            <ul>
              <li>
                homepage:
                <a href={itemDetails?.homepage}>{itemDetails?.homepage}</a>
              </li>
              <li>
                Date aired: <span>{itemDetails?.release_date}</span>
              </li>
              <li>
                Status: <span>{itemDetails?.status}</span>
              </li>
              <li>
                Genre:
                <div className={styles["genres"]}>
                  {itemDetails?.genres?.map((genre: any) => (
                    <span key={genre?.id}>{genre?.name},</span>
                  ))}
                </div>
              </li>
            </ul>

            <ul>
              <li>
                Vote average: <span>{itemDetails?.vote_average}</span>
              </li>
              <li>
                Duration:
                <span>{itemDetails?.runtime} min</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemDetails);
