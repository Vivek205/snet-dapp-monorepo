import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";
import StyledTextField from "shared/dist/components/StyledTextField";

const SNETTextfield = ({
  classes,
  name,
  label,
  helperText,
  value,
  onChange,
  maxCount,
  minCount,
  description,
  icon,
  onKeyUp,
  ...rest
}) => {
  return (
    <Grid container>
      <Grid item sx={12} sm={12} md={6} lg={6} className={classes.basicTextFieldGrid}>
        {icon ? (
          <div className={classes.infoIconContainer}>
            <InfoIcon />
          </div>
        ) : null}
        <div className={classes.textFieldWithExtraText}>
          <StyledTextField
            name={name}
            label={label}
            helperText={helperText}
            variant="outlined"
            value={value}
            onChange={onChange}
            fullWidth
            onKeyUp={onKeyUp}
            {...rest}
          />
          {maxCount ? (
            <span className={classes.charLength}>
              {minCount}/{maxCount} char
            </span>
          ) : null}
        </div>
      </Grid>
      <Grid item sx={12} sm={12} md={6} lg={6} className={classes.description}>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};

SNETTextfield.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

export default withStyles(useStyles)(SNETTextfield);
