import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db, logout } from "../../../firebase/firebase";
import SearchComponent from "../../SearchComponent/SearchComponent";
import styles from "./header.module.scss";

const Header = () => {
  const [userName, setuserName] = useState(null);

  const [user, loading] = useAuthState(auth);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setuserName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) fetchUserName();
  }, [user, loading]);

  return (
    <div className={styles["header"]}>
      <div className={styles["brand-logo"]}>
        <Link to="/">FlixFlex</Link>
      </div>

      <div className={styles["right-side"]}>
        <SearchComponent />
        {userName ? <h4>{userName}</h4> : null}
        <button className={styles["btn-logout"]} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default React.memo(Header);
