import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techAction";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

const TechItem = ({ techItem, deleteTech, isDeleting }) => {
  const { _id, firstName, lastName } = techItem;

  // Function to remove the tech
  const onDelete = (e) => {
    // Delete the tech
    deleteTech(_id);
    // Also show the alert
    M.toast({ html: `${firstName} suspended` });
  };

  return (
    <li className="collection-item teal-text text-darken-3">
      {firstName} {lastName}
      {isDeleting && (
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons">delete</i>
        </a>
      )}
    </li>
  );
};

TechItem.propTypes = {
  techItem: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool.isRequired,
};

// Function to map app level states to props
const mapStateToProps = (state) => ({
  isDeleting: state.tech.isDeleting,
});

export default connect(mapStateToProps, { deleteTech })(TechItem);
