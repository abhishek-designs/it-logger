import React, { useState } from "react";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import { searchLog, removeSearch } from "../../actions/logAction";
import PropTypes from "prop-types";

const Search = ({ searchLog, removeSearch }) => {
  // State for the search input
  const [keyword, setKeyword] = useState("");

  // Function to set the keyword
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  // Function to search the log
  const onSearch = (e) => {
    // First checking wether there is a keyword
    if (keyword === "") {
      // Get the logs
      removeSearch();
    } else {
      // Search the logs through this keyword
      searchLog(keyword);
    }
  };

  return (
    <nav>
      <div className="nav-wrapper teal">
        <form>
          <div className="input-field">
            <input
              type="search"
              id="search"
              value={keyword}
              placeholder="Search Logs..."
              onChange={onChange}
              onKeyUp={onSearch}
            />
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

Search.propTypes = {
  searchLog: PropTypes.func.isRequired,
  removeSearch: PropTypes.func.isRequired,
};

export default connect(null, { searchLog, removeSearch })(Search);
