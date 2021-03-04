import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Button = ({ current }) => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#log-modal"
        className="btn-floating wave-effect btn-large teal modal-trigger"
      >
        <i className="material-icons">{current ? "edit" : "add"}</i>
      </a>
      <ul>
        <li>
          <a href="#!" className="btn-floating wave-effect red">
            <i className="material-icons">person_remove</i>
          </a>
        </li>
        <li>
          <a
            href="#tech-modal"
            className="btn-floating waves-effect white modal-trigger"
          >
            <i className="material-icons teal-text">people_alt</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

Button.propTypes = {
  current: PropTypes.object,
};

// Function to map the states to props
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps)(Button);
