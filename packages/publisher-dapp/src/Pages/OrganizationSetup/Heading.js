import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const Heading = ({ classes, title, description }) => {
  return (
    <div className={classes.topSection}>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default withStyles(useStyles)(Heading);