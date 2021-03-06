import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";
import PropTypes from "prop-types";

const TechSelectOption = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading &&
        techs &&
        techs.map((techItem) => (
          <option
            key={techItem._id}
            value={`${techItem.firstName} ${techItem.lastName}`}
          >
            {techItem.firstName} {techItem.lastName}
          </option>
        ))}
    </>
  );
};

TechSelectOption.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
