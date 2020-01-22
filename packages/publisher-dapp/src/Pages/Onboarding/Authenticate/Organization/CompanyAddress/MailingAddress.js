import React from "react";
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

const MailingAddress = ({ classes }) => {
  const organization = useSelector(state => state.organization);
  const { sameMailingAddress, hqAddress } = organization;
  const { street, apartment, city, zip, country } = organization.mailingAddress;
  const dispatch = useDispatch();

  const handleMailingAddressChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setMailingAddressDetail(name, value));
  };

  const handleSameAddressChange = event => {
    const { name, checked } = event.target;
    dispatch(organizationActions.setOneBasicDetail(name, checked));
  };

  return (
    <Grid item sx={12} sm={12} md={6} lg={6} className={classes.mailingAddressContainer}>
      <Typography variant="subtitle1">Company Mailing Address</Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="sameMailingAddress"
            checked={sameMailingAddress}
            onChange={handleSameAddressChange}
            color="primary"
          />
        }
        label="same as Headquarters Address"
        className={classes.checkbox}
      />
      <StyledTextField
        {...mailingAddressFormData.STREET}
        disabled={sameMailingAddress}
        variant="outlined"
        value={sameMailingAddress ? hqAddress.street : street}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.APARTMENT}
        disabled={sameMailingAddress}
        variant="outlined"
        value={sameMailingAddress ? hqAddress.apartment : apartment}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.CITY}
        disabled={sameMailingAddress}
        variant="outlined"
        value={sameMailingAddress ? hqAddress.city : city}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <Grid container>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <StyledTextField
            {...mailingAddressFormData.ZIP}
            disabled={sameMailingAddress}
            variant="outlined"
            value={sameMailingAddress ? hqAddress.zip : zip}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
        <Grid item sx={12} sm={12} md={8} lg={8}>
          <StyledTextField
            {...mailingAddressFormData.COUNTRY}
            disabled={sameMailingAddress}
            variant="outlined"
            value={sameMailingAddress ? hqAddress.country : country}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(MailingAddress);
