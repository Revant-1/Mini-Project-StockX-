import React from "react";
import { useParams } from "react-router-dom";

function SearchResult() {
  const { search } = useParams();

  return (
    <div>
      <h1>Search Results for: {search}</h1>
      {/* Display your search results here */}
    </div>
  );
}

export default SearchResult;