import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p className="no-results">No results</p>;
  }
  return (
    <>
      {results.map((image) => (
        <img key={image} className="card-image" src={image} alt="spaceImage" />
      ))}
    </>
  );
}

export default SearchResults;
