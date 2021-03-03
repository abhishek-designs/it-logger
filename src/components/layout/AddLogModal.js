import React, { useState } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { addLog } from "../../actions/logAction";
import PropTypes from "prop-types";

const AddLogModal = ({ addLog }) => {
  // State attached with log inputs
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  // Function to clear the input
  const clearInput = () => {
    setMessage("");
    setTech("");
    setAttention(false);
  };

  // Function to submit the log
  const onAdd = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter something" });
    } else {
      // Add the log
      addLog({
        message,
        tech,
        attention,
        date: new Date().toUTCString(),
      });

      // Show the alert after addition
      M.toast({ html: `Log added by ${tech}` });

      // Also the clear the input fields
      clearInput();
    }
  };

  return (
    <div id="log-modal" className="modal">
      <div className="modal-content">
        <h4 className="teal-text">Add Log</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="message">Message</label>
              </div>
              <div className="input-field col s6">
                <select value={tech} onChange={(e) => setTech(e.target.value)}>
                  <option value="">Choose technician</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Sara Williams">Sara Williams</option>
                  <option value="Mike Smith">Mike Smith</option>
                  <option value="Gary Simon">Gary Simon</option>
                </select>
                <label>Select Technician</label>
              </div>
              <div className="input-field col s6">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      name="attention"
                      className="filled-in"
                      onChange={(e) => setAttention(!attention)}
                      checked={attention}
                    />
                    <span>Attention Required</span>
                  </label>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect teal btn"
          onClick={onAdd}
        >
          <i className="material-icons left">add</i> Add
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
