import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  const { firstName, lastName } = tech;

  return (
    <li className="collection-item teal-text text-darken-3">
      {firstName} {lastName}
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
