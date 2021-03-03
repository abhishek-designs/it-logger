import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Search = () => {
  return (
    <nav>
      <div className="nav-wrapper teal">
        <form>
          <div className="input-field">
            <input type="search" id="search" placeholder="Search Logs..." />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Search;
