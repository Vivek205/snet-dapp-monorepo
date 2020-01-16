import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { profileIdentityDetails } from "./content";
import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import MMAddress from "./MMAddress";
import SNETButton from "shared/dist/components/SNETButton";
import { OnboardingRoutes } from "../../OnboardingRouter/Routes";

const Invitee = ({ classes, history }) => {
  const [userFullName, setUserFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path);
  };

  const handleFinish = () => {
    // console.log("handle finish");
  };

  return (
    <Fragment>
      <Grid container className={classes.box}>
        <Typography variant="h6">{profileIdentityDetails.title}</Typography>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.acceptedInvitationContent}>
          <Typography variant="subtitle2">{profileIdentityDetails.description}</Typography>
          <SNETTextfield
            {...profileIdentityDetails.FULL_NAME}
            value={userFullName}
            onChange={e => setUserFullName(e.target.value)}
          />
          <SNETTextfield
            {...profileIdentityDetails.PHONE_NUMBER}
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.actionContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.metamaskField}>
              <MMAddress address={address} setAddress={setAddress} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" />
        <SNETButton color="primary" children="back" onClick={handleNavigateBack} />
        <SNETButton color="primary" variant="contained" children="finish" onClick={handleFinish} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(Invitee);
