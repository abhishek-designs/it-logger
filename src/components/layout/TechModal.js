import React from "react";
import Techs from "../techs/Techs";

const TechModal = () => {
  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4 className="teal-text">Technicians</h4>
        <Techs />
      </div>
      <div className="modal-footer">
        <a
          href="#add-tech-modal"
          className="btn waves-effect waves-light modal-trigger teal"
        >
          <i className="material-icons left">person</i>
          Add Technician
        </a>
      </div>
    </div>
  );
};

export default TechModal;
