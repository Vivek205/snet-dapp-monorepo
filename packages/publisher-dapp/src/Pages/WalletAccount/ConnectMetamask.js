import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import SNETButton from "shared/dist/components/SNETButton";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import NoMetamaskImg from "shared/dist/assets/images/NoMetamask.png";

import { useStyles } from "./styles";

const ConnectMetamask = ({ classes, initControlServiceRequest, initEscrow, setMMConnected }) => {
  const [alert, setAlert] = useState({});
  const handleConnectMM = async () => {
    try {
      initControlServiceRequest();
      await initEscrow();
      setMMConnected(true);
    } catch (e) {
      setAlert({ type: alertTypes.ERROR, message: "Unable to connect Metamask. Please try again" });
    }
  };

  return (
    <Grid container className={classes.metaMaskContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h3" className={classes.walletAccHeading}>
          Wallet Account
        </Typography>
        <div className={classes.metamaskContent}>
          <img src={NoMetamaskImg} alt="No Metamask Connected" />
          <div>
            <Typography className={classes.metamaskTitle}>Metamask Connection Needed</Typography>
            <Typography className={classes.metamaskDesc}>
              Please install or enable Metamask to view the contents of this page.{" "}
              <span>
                <a href="#" title="Click Here">
                  Click here{" "}
                </a>
                to learn more about Metamask and how to use it.
              </span>
            </Typography>
            <SNETButton color="primary" variant="contained" children="Connect Metamask" onClick={handleConnectMM} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.alertBoxContainer}>
        <AlertBox type={alert.type} message={alert.message} />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(ConnectMetamask);
