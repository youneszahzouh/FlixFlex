import React from "react";
import MovieList from "../../components/Movies/MoviesList/MovieList";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <MovieList />
    </div>
  );
};

export default React.memo(Home);
