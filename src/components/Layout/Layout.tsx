import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Navbar />

      <section className={styles["main"]}>
        <Outlet />
      </section>
    </div>
  );
};

export default React.memo(Layout);
