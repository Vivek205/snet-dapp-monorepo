import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";

import { useStyles } from "./styles";

const StyledTextField = ({ classes, label, handleChange, value, InputProps, ...restProps }) => {
  return (
    <TextField
      id="outlined-name"
      label={label}
      className={`${classes.styledTextField} ${classes.className}`}
      value={value}
      onChange={handleChange}
      margin="normal"
      variant="outlined"
      InputProps={InputProps}
      {...restProps}
    />
  );
};

export default withStyles(useStyles)(StyledTextField);
