import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { addLog, editLog, clearCurrentLog } from "../../actions/logAction";
import TechSelectOption from "./TechSelectOption";
import PropTypes from "prop-types";

const AddLogModal = ({
  current,
  addLog,
  editLog,
  clearCurrentLog,
  // tech: { techs, loading },
  // getTechs,
}) => {
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

  // Function to edit the log
  const onEditLog = (e) => {
    // Edit the log
    editLog({
      id: current.id,
      message,
      tech,
      attention,
      date: new Date().toUTCString(),
    });
  };

  // Function to clear the current state log
  const onClearCurrent = (e) => {
    clearCurrentLog();
  };

  useEffect(() => {
    // Check wether there is an current item in the state, if it is there then fill the inputs with the current values
    if (current) {
      const { message, tech, attention } = current;
      setMessage(message);
      setTech(tech);
      setAttention(attention);
    } else {
      // Clear the inputs as usual
      clearInput();
    }

    // Get the techs from the server
    // getTechs();
  }, [current]);

  return (
    <div id="log-modal" className="modal">
      <div className="modal-content">
        <h4 className="teal-text">{current ? "Edit Log" : "Add Log"}</h4>
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
                {!current && <label htmlFor="message">Message</label>}
              </div>
              <div className="input-field col s6">
                <select
                  className="browser-default"
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                >
                  <option value="">Choose technician</option>
                  <TechSelectOption />
                </select>
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
        {current ? (
          <>
            <a
              href="#!"
              className="btn white teal-text text-darken-4"
              onClick={onClearCurrent}
            >
              <i className="material-icons left">clear</i>
              Clear
            </a>
            <a
              href="#!"
              className="btn modal-close teal"
              style={{ marginLeft: "1rem" }}
              onClick={onEditLog}
            >
              <i className="material-icons left">edit</i>
              Edit
            </a>
          </>
        ) : (
          <a href="#!" className="modal-close teal btn" onClick={onAdd}>
            <i className="material-icons left">add</i> Add
          </a>
        )}
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  current: PropTypes.object,
  addLog: PropTypes.func.isRequired,
  editLog: PropTypes.func.isRequired,
  clearCurrentLog: PropTypes.func.isRequired,
  // tech: PropTypes.object.isRequired,
  // getTechs: PropTypes.array.isRequired,
};

// Function to map the app level states to props
const mapStateToProps = (state) => ({
  current: state.log.current,
  // tech: state.tech,
});

export default connect(mapStateToProps, {
  addLog,
  editLog,
  clearCurrentLog,
  // getTechs,
})(AddLogModal);
