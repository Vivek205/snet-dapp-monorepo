import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import StyledTextField from "shared/dist/components/StyledTextField";
import { mailingAddressFormData } from "./content";
import Checkbox from "@material-ui/core/Checkbox";

const MailingAddress = props => {
  const { mailingAddress, handleMailingAddressChange, sameAddress, handleSameAddressChange } = props;

  return (
    <Grid item sx={12} sm={12} md={6} lg={6}>
      <Typography variant="h6">Company Mailing Address</Typography>
      <FormControlLabel
        control={<Checkbox checked={sameAddress} onChange={handleSameAddressChange} color="primary" />}
        label="same as Headquarters Address"
      />
      <StyledTextField
        {...mailingAddressFormData.STREET}
        variant="outlined"
        value={mailingAddress.STREET}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.APARTMENT}
        variant="outlined"
        value={mailingAddress.APARTMENT}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.CITY}
        variant="outlined"
        value={mailingAddress.CITY}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <Grid container>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <StyledTextField
            {...mailingAddressFormData.ZIP}
            variant="outlined"
            value={mailingAddress.ZIP}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
        <Grid item sx={12} sm={12} md={8} lg={8}>
          <StyledTextField
            {...mailingAddressFormData.COUNTRY}
            variant="outlined"
            value={mailingAddress.COUNTRY}
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
  mailingAddress: PropTypes.shape({
    street: PropTypes.string,
    apartment: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
  }),
  handleMailingAddressChange: PropTypes.func,
};

export default MailingAddress;
