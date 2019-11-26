import React from "react";
import PropTypes from "prop-types";

const Button = ({ content }) => {
  return <button style={{ background: "blue", color: "red" }}>{content}</button>;
};

Button.propTypes = {
  content: PropTypes.string
};

export default Button;
