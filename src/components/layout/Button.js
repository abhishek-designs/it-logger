import React from "react";
import { connect } from "react-redux";
import { setTechDelete } from "../../actions/techAction";
import PropTypes from "prop-types";

const Button = ({ current, setTechDelete }) => {
  // Function to set the delete state for the tech
  const onDeleteTech = (e) => {
    // Set delete state
    setTechDelete();
  };
  return (
    <div className="fixed-action-btn">
      <a
        href="#log-modal"
        className="btn-floating btn-large teal modal-trigger"
      >
        <i className="material-icons">{current ? "edit" : "add"}</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-modal"
            className="btn-floating red modal-trigger"
            onClick={onDeleteTech}
          >
            <i className="material-icons">person_remove</i>
          </a>
        </li>
        <li>
          <a href="#tech-modal" className="btn-floating white modal-trigger">
            <i className="material-icons teal-text">people_alt</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

Button.propTypes = {
  current: PropTypes.object,
  setTechDelete: PropTypes.func.isRequired,
};

// Function to map the states to props
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { setTechDelete })(Button);
