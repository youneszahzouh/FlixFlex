import React from "react";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li>Movies</li>
        <li>Series</li>
      </ul>
    </nav>
  );
};

export default Navbar;
