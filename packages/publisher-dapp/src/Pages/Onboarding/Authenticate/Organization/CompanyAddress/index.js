import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import HQAddress from "./HQAddress";
import MailingAddress from "./MailingAddress";

const CompanyAddress = ({
  classes,
  mailingAddress,
  handleMailingAddressChange,
  sameAddress,
  handleSameAddressChange,
}) => {
  return (
    <Grid container className={classes.headQuartersCompanyMailingContainer}>
      <HQAddress />
      <MailingAddress
        mailingAddress={mailingAddress}
        sameAddress={sameAddress}
        handleSameAddressChange={handleSameAddressChange}
        handleMailingAddressChange={handleMailingAddressChange}
      />
    </Grid>
  );
};

CompanyAddress.propTypes = {
  sameHqAndMailAddress: PropTypes.bool,
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

export default withStyles(useStyles)(CompanyAddress);
