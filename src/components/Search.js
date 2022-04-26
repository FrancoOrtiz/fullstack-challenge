import React from "react";
import { Layout } from "./Layout";
import { SearchBar } from "./SearchBar";
import { SearchResult } from "./SearchResult";

export const Search = () => {
  return (
    <Layout>
      <div className="w-4/5 m-auto">
        <SearchBar></SearchBar>
        <SearchResult></SearchResult>
      </div>
    </Layout>
  );
};
