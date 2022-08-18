import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form>
      <input placeholder="Search" className={styles["input"]} />
    </form>
  );
};

export default Search;
