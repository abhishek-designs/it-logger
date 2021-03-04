import React, { useEffect } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techAction";
import PropTypes from "prop-types";

const Techs = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    // Load the technicians from the server
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="collection">
      {!loading && techs
        ? techs.map((techItem) => (
            <TechItem key={techItem.id} techItem={techItem} />
          ))
        : "No Technician Registered"}
    </ul>
  );
};

Techs.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

// Function to map the app level states to props
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(Techs);
