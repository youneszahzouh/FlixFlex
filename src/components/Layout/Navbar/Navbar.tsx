import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const navItems = [
  {
    url: "/movies",
    name: "Movies",
  },
  {
    url: "/tvseries",
    name: "Tv Series",
  },
];
const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        {navItems?.map((navItem) => (
          <li key={navItem?.url}>
            <Link to={navItem?.url}>{navItem?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
