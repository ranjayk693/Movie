import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <div className="searchContainer">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search_button"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Please enter the movie name"
        />
      </form>
      <div className="errormsg">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
