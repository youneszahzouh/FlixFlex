import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./search-component.module.scss";
const SearchComponent = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onChange = useCallback((e: any) => {
    console.log(
      "%cSearchComponent.tsx line:9 e.target.value",
      "color: white; background-color: #007acc;",
      e.target.value
    );

    const { value } = e.target;
    setSearchValue(value);
  }, []);

  return (
    <div className={styles["search-input"]}>
      <input
        name="search"
        type="text"
        value={searchValue}
        onChange={(e) => onChange(e)}
        placeholder={"search here.."}
      />
      <button
        onClick={() => {
          navigate(`/discover?search=${searchValue}`);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
