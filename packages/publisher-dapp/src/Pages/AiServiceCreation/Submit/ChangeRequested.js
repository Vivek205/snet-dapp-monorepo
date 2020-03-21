import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BlockIcon from "@material-ui/icons/Block";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";

import { useStyles } from "./LaunchService/styles";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const ChangeRequested = ({ classes, onContinueToEdit, onSubmitComment }) => {
  const comments = useSelector(state => state.aiServiceDetails.comments);
  const dispatch = useDispatch();

  const handleCommentChange = e => {
    dispatch(aiServiceDetailsActions.setServiceProviderComment(e.target.value));
  };

  return (
    <div className={classes.launchServiceContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SNET admins will review your service protocals. This process could take a
          few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
          needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
        </Typography>
        <AlertBox
          type={alertTypes.WARNING}
          header="SNET requested changes"
          icon={BlockIcon}
          message="Please make the appropriate changes and submit again for approval."
        />
        <Typography variant="h6">Approvers Comment</Typography>
        <SNETTextarea label="Text Input" rowCount={8} value={comments.approver} />

        <Typography variant="h6">Message to Reviewers</Typography>
        <SNETTextarea label="Text Input" rowCount={8} value={comments.serviceProvider} onChange={handleCommentChange} />

        <SNETButton color="primary" variant="contained" children="provide more details" onClick={onSubmitComment} />
        <SNETButton color="primary" variant="contained" children="Go back to edit" onClick={onContinueToEdit} />
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(ChangeRequested);
