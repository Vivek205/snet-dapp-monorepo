import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../styles";
import StyledTextField from "shared/dist/components/StyledTextField";

const BasicDetailsInput = props => {
  const classes = useStyles();
  const { name, label, helperText, value, onChange, description } = props;

  return (
    <Grid container>
      <Grid item sx={12} sm={12} md={6} lg={6} className={classes.basicTextFieldGrid}>
        <StyledTextField
          name={name}
          label={label}
          helperText={helperText}
          variant="outlined"
          value={value}
          onChange={onChange}
          fullWidth
        />
      </Grid>
      <Grid item sx={12} sm={12} md={6} lg={6}>
        <Typography variant="body2">{description}</Typography>
      </Grid>
    </Grid>
  );
};

BasicDetailsInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

export default BasicDetailsInput;
