import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ techItem }) => {
  const { firstName, lastName } = techItem;

  return (
    <li className="collection-item teal-text text-darken-3">
      {firstName} {lastName}
    </li>
  );
};

TechItem.propTypes = {
  techItem: PropTypes.object.isRequired,
};

export default TechItem;
