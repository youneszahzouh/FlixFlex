import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["brand-logo"]}>
        <Link to="/">FlixFlex</Link>
      </div>

      <div className={styles["right-side"]}>
        <button className={styles["btn-signin"]}>Sign in</button>
      </div>
    </div>
  );
};

export default React.memo(Header);
