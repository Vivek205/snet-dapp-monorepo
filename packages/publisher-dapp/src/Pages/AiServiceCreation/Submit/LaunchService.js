import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import HourGlassIcon from "@material-ui/icons/HourglassEmpty";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../constant";
import { useStyles } from "./styles";

import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextarea from "shared/dist/components/SNETTextarea";

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

  return (
    <div className={classes.submitContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SNET admins will review your service protocals. This process could take a
          few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
          needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
        </Typography>
        <Grid container className={classes.table}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableColumn}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography className={classes.th}>status</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography className={classes.th}>feedback</Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <Typography className={classes.th}>actions</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography className={classes.mobileTH}>status:</Typography>
              <div>
                <DoneIcon className={classes.tickIcon} />
                <Typography className={classes.td}>Submitted For Review</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography className={classes.mobileTH}>feedback:</Typography>
              <Typography className={classes.td}>Submitted Mar 15, 2019 at 5:45PM by Greg Kuebler</Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} className={classes.actionsColumn}>
              <Typography className={classes.mobileTH}>actions:</Typography>
              <ArrowDownIcon className={classes.downCaretIcon} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography className={classes.mobileTH}>status:</Typography>
              <div>
                <HourGlassIcon className={classes.hourglassIcon} />
                <Typography className={classes.td}>AI Service Profile Content</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography className={classes.mobileTH}>feedback:</Typography>
              <Typography className={classes.td}>Submitted Mar 15, 2019 at 5:45PM by Greg Kuebler</Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} className={classes.actionsColumn}>
              <Typography className={classes.mobileTH}>actions:</Typography>
              <ArrowDownIcon className={classes.downCaretIcon} />
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.alertBoxBtnContainer}>
          <AlertBox type="warning" message="Review in Progress" />
          <SNETButton
            color="primary"
            variant="contained"
            disabled={serviceDetails.serviceState.state !== serviceCreationStatus.APPROVED}
            onClick={handlePublishToBlockchain}
            children="Continue to Launch"
          />
        </div>
      </Grid>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <div className={classes.messageReviewContainer}>
          <Typography variant="h6">Message to Reviewers</Typography>
          <SNETTextarea label="Text Input" rowCount={8} />
          <SNETButton color="primary" variant="outlined" children="send comment" />
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(LaunchService);
