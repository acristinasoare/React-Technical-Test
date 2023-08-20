import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p className="no-results">No results</p>;
  }
  return (
    <>
      <div className="grid-container">
        {results.map((image) => (
          <img key={image} className="grid-item" src={image} alt="spaceImage" />
        ))}
      </div>
    </>
  );
}

export default SearchResults;
