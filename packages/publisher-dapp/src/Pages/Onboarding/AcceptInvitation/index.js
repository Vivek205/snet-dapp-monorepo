import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { profileIdentityDetails } from "./content";
import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
{
  /*import AlertBox from "shared/dist/components/AlertBox"; */
}

const AcceptInvitation = ({ classes }) => {
  return (
    <Grid container className={classes.box}>
      <Typography variant="h6">{profileIdentityDetails.title}</Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.acceptedInvitationContent}>
        <Typography variant="subtitle2">{profileIdentityDetails.description}</Typography>
        <SNETTextfield {...profileIdentityDetails.FULL_NAME} />
        <SNETTextfield {...profileIdentityDetails.PHONE_NUMBER} />
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.actionContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.metamaskField}>
            <SNETTextfield {...profileIdentityDetails.METAMASK_ADDRESS} />
            {/*<AlertBox message="Please install or log in to Metamask to proceed further.  Learn more about Metamask." type="warning" /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SNETButton children="connect metamask" variant="contained" color="primary" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(AcceptInvitation);
