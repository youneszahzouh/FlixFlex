import React from "react";
import { ImSpinner3 } from "react-icons/im";

import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles["loader"]}>
      <ImSpinner3 />
    </div>
  );
};

export default React.memo(Loader);
