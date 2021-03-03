import React from "react";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/logAction";
import PropTypes from "prop-types";

const LogItem = ({ logItem, deleteLog }) => {
  const { id, message, attention, tech, date } = logItem;

  // Function to delete a log item
  const onDelete = (e) => {
    // Delete the log
    deleteLog(id);
  };

  return (
    <li
      className={`collection-item ${
        attention ? "red-text text-darken-1" : "teal-text text-darken-4"
      }`}
    >
      <span className="title">
        <span className="grey-text">ID #{id} </span>
        {message} <span className="grey-text">log added by {tech}</span> <br />
        <span className="teal-text text-lighten-4">{date}</span>
      </span>
      <a href="#!" className="secondary-content" onClick={onDelete}>
        <i className="material-icons">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  logItem: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
