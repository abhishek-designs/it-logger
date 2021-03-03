import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  // State for the technician input
  const [tech, setTech] = useState({
    firstName: "",
    lastName: "",
  });

  // Function to run when typing in the input
  const onChange = (e) => {
    // Update the tech state
    setTech({
      ...tech,
      [e.target.name]: e.target.value,
    });
  };

  // Function to register a technician when clicked on register btn
  const registerTech = (e) => {
    // Performing some validations first
    if (tech.firstName === "" || tech.lastName === "") {
      // Show the alert
      M.toast({ html: "Please fill out the fields" });
    } else {
      // Register the tech
      console.log({
        msg: "Tech Registered",
        tech,
      });
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4 className="teal-text">Add Technician</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={onChange}
              value={tech.firstName}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={onChange}
              value={tech.lastName}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="btn teal" onClick={registerTech}>
          <i className="material-icons left">add</i>
          Register
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
