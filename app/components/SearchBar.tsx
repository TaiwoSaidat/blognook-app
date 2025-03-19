// import React from "react";
"use client";
import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ onSearch, searchQuery }: any) => {
  const handleInputChange = (e: any) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search posts by title..."
        value={searchQuery}
        onChange={handleInputChange}
        aria-label="Search posts"
      />
    </div>
  );
};

export default SearchBar;
