import React from "react";
import PropTypes from "prop-types";

const Button = ({
  content
}) => {
  return React.createElement("button", {
    style: {
      background: "blue",
      color: "red"
    }
  }, content);
};

Button.propTypes = {
  content: PropTypes.string
};
export default Button;