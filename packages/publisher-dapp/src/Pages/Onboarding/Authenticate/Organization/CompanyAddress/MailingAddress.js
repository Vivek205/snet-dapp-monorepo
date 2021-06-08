import React, { useState } from "react";
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

const stateSelector = state => ({
  // sameMailingAddress: state.organization.orgAddress.sameMailingAddress,
  hqAddress: state.organization.orgAddress.hqAddress,
  mailingAddress: state.organization.orgAddress.mailingAddress,
});

const MailingAddress = ({ classes }) => {
  const { hqAddress, mailingAddress } = useSelector(stateSelector);
  const { street, apartment, city, zip, country } = mailingAddress;
  const dispatch = useDispatch();
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const handleMailingAddressChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setOrgMailingAddressDetail(name, value));
  };

  const handleSameAddressChange = () => {
    // const { checked } = event.target;
    // dispatch(organizationActions.setOrgSameMailingAddress(checked));
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <Grid item sx={12} sm={12} md={6} lg={6} className={classes.mailingAddressContainer}>
      <Typography variant="subtitle1">Company Mailing Address</Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="sameMailingAddress"
            checked={checkboxChecked}
            onChange={handleSameAddressChange}
            color="primary"
          />
        }
        label="Same as Headquarters Address"
        className={classes.checkbox}
      />
      <StyledTextField
        {...mailingAddressFormData.STREET}
        disabled={checkboxChecked}
        variant="outlined"
        value={checkboxChecked ? hqAddress.street : street}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.APARTMENT}
        disabled={checkboxChecked}
        variant="outlined"
        value={checkboxChecked ? hqAddress.apartment : apartment}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <StyledTextField
        {...mailingAddressFormData.CITY}
        disabled={checkboxChecked}
        variant="outlined"
        value={checkboxChecked ? hqAddress.city : city}
        onChange={handleMailingAddressChange}
        fullWidth
      />
      <Grid container>
        <Grid item sx={12} sm={12} md={4} lg={4} className={classes.postalCode}>
          <StyledTextField
            {...mailingAddressFormData.ZIP}
            disabled={checkboxChecked}
            variant="outlined"
            value={checkboxChecked ? hqAddress.zip : zip}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
        <Grid item sx={12} sm={12} md={8} lg={8}>
          <StyledTextField
            {...mailingAddressFormData.COUNTRY}
            disabled={checkboxChecked}
            variant="outlined"
            value={checkboxChecked ? hqAddress.country : country}
            onChange={handleMailingAddressChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(MailingAddress);
