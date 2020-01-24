import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import HQAddress from "./HQAddress";
import MailingAddress from "./MailingAddress";

const CompanyAddress = ({ classes }) => {
  return (
    <Grid container className={classes.headQuartersCompanyMailingContainer}>
      <HQAddress />
      <MailingAddress />
    </Grid>
  );
};

export default withStyles(useStyles)(CompanyAddress);
