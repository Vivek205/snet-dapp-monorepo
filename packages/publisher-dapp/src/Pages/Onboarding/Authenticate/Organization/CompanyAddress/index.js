import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import HQAddress from "./HQAddress";
import MailingAddress from "./MailingAddress";

const CompanyAddress = ({ classes, sameAddress, handleSameAddressChange }) => {
  return (
    <Grid container className={classes.headQuartersCompanyMailingContainer}>
      <HQAddress />
      <MailingAddress sameAddress={sameAddress} handleSameAddressChange={handleSameAddressChange} />
    </Grid>
  );
};

CompanyAddress.propTypes = {
  sameHqAndMailAddress: PropTypes.bool,
  handleSameAddressChange: PropTypes.func,
};

export default withStyles(useStyles)(CompanyAddress);
