import React from "react";
import PropTypes from "prop-types";

const PrettyPrintJson = ({ data, space }) => (
  <div>
    <pre>{JSON.stringify(data, null, space)}</pre>
  </div>
);

PrettyPrintJson.propTypes = {
  data: PropTypes.object.isRequired,
  space: PropTypes.number,
};

PrettyPrintJson.defaultProps = {
  space: 2,
};

export default PrettyPrintJson;
