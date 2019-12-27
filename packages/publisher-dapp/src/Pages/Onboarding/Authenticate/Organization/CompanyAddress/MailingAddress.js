import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import StyledTextField from "shared/dist/components/StyledTextField";
import { mailingAddressFormData } from "./content";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../../Services/Redux/actionCreators";

const MailingAddress = ({ classes, sameAddress, handleSameAddressChange }) => {
  const organization = useSelector(state => state.organization);
  const { street, apartment, city, zip, country } = organization.mailingAddress;
  const dispatch = useDispatch();

  const handleMailingAddressChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setMailingAddressDetail(name, value));
  };

  return (
    <Grid item sx={12} sm={12} md={6} lg={6} className={classes.mailingAddressContainer}>
      <Typography variant="subtitle1">Company Mailing Address</Typography>
      <FormControlLabel
        control={<Checkbox checked={sameAddress} onChange={handleSameAddressChange} color="primary" />}
        label="same as Headquarters Address"
        className={classes.checkbox}
      />
      <StyledTextField
        {...mailingAddressFormData.STREET}
        variant="outlined"
        value={street}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.APARTMENT}
        variant="outlined"
        value={apartment}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.CITY}
        variant="outlined"
        value={city}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <Grid container>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <StyledTextField
            {...mailingAddressFormData.ZIP}
            variant="outlined"
            value={zip}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
        <Grid item sx={12} sm={12} md={8} lg={8}>
          <StyledTextField
            {...mailingAddressFormData.COUNTRY}
            variant="outlined"
            value={country}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

MailingAddress.propTypes = {
  sameAddress: PropTypes.bool,
  handleSameAddressChange: PropTypes.func,
};

export default withStyles(useStyles)(MailingAddress);
