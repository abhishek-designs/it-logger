import React from "react";

const Button = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#log-modal"
        className="btn-floating wave-effect btn-large teal modal-trigger"
      >
        <i className="material-icons">add</i>
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

export default Button;
