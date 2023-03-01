import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "../../SearchComponent/SearchComponent";
import styles from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = useCallback(function onLogout() {
    localStorage.removeItem("email");
    navigate("/login");
  }, []);

  return (
    <div className={styles["header"]}>
      <div className={styles["brand-logo"]}>
        <Link to="/">FlixFlex</Link>
      </div>

      <div className={styles["right-side"]}>
        <SearchComponent />
        <button className={styles["btn-logout"]} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);
