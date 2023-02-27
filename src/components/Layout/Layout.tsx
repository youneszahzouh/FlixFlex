import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles["container"]}>
      <Navbar />

      <section className={styles["main"]}>
        <Outlet />
      </section>
    </div>
  );
};

export default React.memo(Layout);
