import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { withStyles } from "@material-ui/core/styles";
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
    <Grid container className={classes.walletAccContainer}>
      <Grid item xs={12} sm={12} md={2} lg={2}>
        <Typography>
          <SNETButton color="primary" variant="contained" children="Connect Metamask" onClick={handleConnectMM} />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2}>
        <AlertBox type={alert.type} message={alert.message} />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(ConnectMetamask);
