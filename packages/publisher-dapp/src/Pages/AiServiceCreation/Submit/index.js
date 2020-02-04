import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Submit = ({ classes, location }) => {
  const [alert] = useState({});
  return (
    <Grid container className={classes.submitContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.submitDescription}>
            After you submitted your service, SNET admins will review your service protocals. This process could take a
            few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
            needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
          </Typography>
          <Typography className={classes.metamaskAddText}>
            The following Metamask address will be used for publishing the service.{" "}
          </Typography>
          <SNETTextfield icon label="Metamask Address disabled" disabled />
          <div className={classes.commentField}>
            <SNETTextarea
              label="Comments for Reviewers (optional)"
              minCount={0}
              maxCount={5000}
              rowCount={8}
              colCount={105}
            />
          </div>
          <AlertBox type={alert.type} message={alert.message} />
          <div className={classes.btnContainer}>
            <SNETButton children="connect metamask" color="primary" variant="contained" />
            <SNETButton children="submit for review" color="primary" variant="contained" disabled />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Submit);
