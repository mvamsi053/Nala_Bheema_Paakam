import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/searchbar.css";

function SearchBar({ placeholder, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handelSerach() {
    setSearchTerm("");
  }
  return (
    <div className="serach">
      <div className="searchInputs">
        <input
          className="search-field form-control "
          type="search"
          id="mySearch"
          name="s"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="searchResult">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return searchTerm;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <Link
                className="srch-list"
                onClick={handelSerach}
                to={`${data.findIndex((x) => x.id === val.id)}`}
              >
                <p>{val.name}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
