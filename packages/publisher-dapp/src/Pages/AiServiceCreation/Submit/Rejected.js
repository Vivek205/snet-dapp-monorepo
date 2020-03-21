import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BlockIcon from "@material-ui/icons/Block";

import { withStyles } from "@material-ui/core";
import { useStyles } from "./styles";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import { useSelector } from "react-redux";

const Rejected = ({ classes, onContinueToEdit }) => {
  const comments = useSelector(state => state.aiServiceDetails.comments.approver);

  return (
    <div className={classes.launchServiceContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SNET admins will review your service protocals. This process could take a
          few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
          needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
        </Typography>
        <div className={classes.rejectedAlertAndBtnContainer}>
          <AlertBox
            type={alertTypes.ERROR}
            header="Your AI Service is Rejected by SNET"
            icon={BlockIcon}
            message="Please make the appropriate changes and submit again for approval."
          />
          <div className={classes.approvalCommentSection}>
            <Typography variant="h6">Reviewers Comment</Typography>
            <Typography>{comments}</Typography>
          </div>
          <SNETButton color="primary" variant="contained" children="Contact Support" onClick={onContinueToEdit} />
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(Rejected);
