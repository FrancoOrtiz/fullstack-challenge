import React from "react";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./SearchResult";

export const Search = () => {
  return (
    <div className="w-4/5 m-auto">
      <SearchBar></SearchBar>
      <SearchResult></SearchResult>
    </div>
  );
};
