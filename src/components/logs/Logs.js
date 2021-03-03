import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    // Fetch the logs when the component gets mounted
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    // If there is loading then show the preloader
    return <Preloader />;
  }

  // Otherwise return the logs as usual
  return (
    <div className="logs-contain" style={{ marginTop: "3rem" }}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="teal-text">Added Logs</h4>
        </li>
        {logs.map((logItem) => (
          <LogItem key={logItem.id} logItem={logItem} />
        ))}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// Create a mapStateToProps
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
