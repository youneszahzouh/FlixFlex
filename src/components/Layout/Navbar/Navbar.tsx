import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["brand-logo"]}>
        <Link to="/">FlixFlex</Link>
      </div>

      <div className={styles["right-side"]}>
        <button className={styles["btn-signin"]}>Sign in</button>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
