import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../../constant";
import ContinueLaunchTable from "./ContinueLaunchTable";
import LaunchTable from "./LaunchTable";
import MessageToReviewers from "./MessageToReviewers";
import { useStyles } from "./styles";

const selectState = state => ({
  organization: state.organization,
  serviceDetails: state.aiServiceDetails,
});

const LaunchService = ({ classes }) => {
  const { organization, serviceDetails } = useSelector(selectState);
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();

  const handlePublishToBlockchain = async () => {
    const { metadata_ipfs_hash } = await dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid));
    await dispatch(
      aiServiceDetailsActions.publishToBlockchain(organization, serviceDetails, metadata_ipfs_hash, serviceDetails.tags)
    );
  };

  if (serviceDetails.serviceState.state === serviceCreationStatus.APPROVAL_PENDING) {
    return (
      <div className={classes.launchServiceContainer}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
          <Typography variant="h6">Review Process</Typography>
          <Typography className={classes.reviewProcessDescription}>
            After you submitted your service, SNET admins will review your service protocals. This process could take a
            few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
            needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
          </Typography>
          <ContinueLaunchTable handlePublishToBlockchain={handlePublishToBlockchain} serviceDetails={serviceDetails} />
        </Grid>
        <MessageToReviewers />
      </div>
    );
  }

  return (
    <div className={classes.launchServiceContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SNET admins will review your service protocals. This process could take a
          few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
          needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
        </Typography>
        <LaunchTable />
      </Grid>
      <MessageToReviewers />
    </div>
  );
};

export default withStyles(useStyles)(LaunchService);
