import React from "react";
import { connect } from "react-redux";
import { removeTechDelete } from "../../actions/techAction";
import Techs from "../techs/Techs";
import PropTypes from "prop-types";

const TechModal = ({ isDeleting, removeTechDelete }) => {
  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        {isDeleting ? (
          <h4 className="teal-text">Suspend Technicians</h4>
        ) : (
          <h4 className="teal-text">Technicians</h4>
        )}
        <Techs />
      </div>

      <div className="modal-footer">
        {isDeleting ? (
          <a
            href="#!"
            className="btn modal-close white teal-text text-darken-4"
            onClick={() => removeTechDelete()}
          >
            <i className="material-icons left">clear</i>
            Cancel
          </a>
        ) : (
          <a
            href="#add-tech-modal"
            className="btn waves-effect waves-light modal-trigger teal"
          >
            <i className="material-icons left">person</i>
            Add Technician
          </a>
        )}
      </div>
    </div>
  );
};

TechModal.propTypes = {
  isDeleting: PropTypes.bool.isRequired,
  removeTechDelete: PropTypes.func.isRequired,
};

// Function to map app level states to props
const mapStateToProps = (state) => ({
  isDeleting: state.tech.isDeleting,
});

export default connect(mapStateToProps, { removeTechDelete })(TechModal);
