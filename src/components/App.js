import React from "react";
import { useState } from "react";
import "../styles/app.css";
import "../styles/search.css";
import Search from "./Search";
import SearchResults from "../components/SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState();
  console.log(searchResults);
  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
};

export default App;
