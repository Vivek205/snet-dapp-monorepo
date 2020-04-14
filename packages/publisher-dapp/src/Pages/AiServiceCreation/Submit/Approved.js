import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import DaemonConfig from "./DaemonConfig";

const Approved = ({ classes, daemonConfig }) => {
  return (
    <Grid container className={classes.submitContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.submitDescription}>
            Once you have submitted your service, SingularityNET will review your service protocols. You will be
            notified once the review has been completed, please be patient as this process could take a few days.
          </Typography>
          <DaemonConfig config={daemonConfig} title="Test Configuration File" />
          <AlertBox type={alert.type} message={alert.message} children={alert.children} />
          <div className={classes.btnContainer}>
            <SNETButton children="continue" color="primary" variant="contained" onClick={this.handleSubmitForReview} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Approved);
