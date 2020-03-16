import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../../constant";
import ContinueLaunchTable from "./ContinueLaunchTable";
import LaunchTable from "./LaunchTable";
import MessageToReviewers from "./MessageToReviewers";
import { useStyles } from "./styles";
import DaemonConfig from "../DaemonConfig";

class LaunchService extends React.Component {
  state = { daemonConfig: {} };

  fetchSampleDaemonConfig = async () => {
    try {
      const { organization, serviceDetails, getSampleDaemonConfig } = this.props;
      if (serviceDetails.serviceState.state === serviceCreationStatus.APPROVAL_PENDING) {
        return;
      }
      const daemon_config = await getSampleDaemonConfig(organization.uuid, serviceDetails.uuid, false);
      this.setState({ daemonConfig: daemon_config });
    } catch (e) {
      // Alert user daemon config cannot be retrieved
    }
  };

  componentDidMount = async () => {
    await this.fetchSampleDaemonConfig();
  };

  handlePublishToBlockchain = async () => {
    const { publishToIPFS, organization, serviceDetails, history, publishService } = this.props;
    const { metadata_ipfs_hash } = await publishToIPFS(organization.uuid, serviceDetails.uuid);
    await publishService(organization, serviceDetails, metadata_ipfs_hash, serviceDetails.tags, history);
  };

  render() {
    const { classes, serviceDetails } = this.props;
    const { daemonConfig } = this.state;
    if (serviceDetails.serviceState.state === serviceCreationStatus.APPROVAL_PENDING) {
      return (
        <div className={classes.launchServiceContainer}>
          <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
            <Typography variant="h6">Review Process</Typography>
            <Typography className={classes.reviewProcessDescription}>
              After you submitted your service, SNET admins will review your service protocals. This process could take
              a few days. After the review you will be notified if your service as has been ACCEPTED or if some your
              inputs needs to be refined. You will be able to review and respond to the feedback from the SNET Admins
              here.
            </Typography>
            <ContinueLaunchTable
              handlePublishToBlockchain={this.handlePublishToBlockchain}
              serviceDetails={serviceDetails}
            />
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
          <LaunchTable handlePublishToBlockchain={this.handlePublishToBlockchain} />
          <DaemonConfig config={daemonConfig} />
        </Grid>
        <MessageToReviewers />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  organization: state.organization,
  serviceDetails: state.aiServiceDetails,
});

const mapDispatchToProps = dispatch => ({
  getSampleDaemonConfig: (orgUuid, serviceUuid, testDaemon) =>
    dispatch(aiServiceDetailsActions.getSampleDaemonConfig(orgUuid, serviceUuid, testDaemon)),
  publishToIPFS: (orgUuid, serviceUuid) => dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid)),
  publishService: (organization, serviceDetails, metadata_ipfs_hash, tags, history) =>
    dispatch(aiServiceDetailsActions.publishService(organization, serviceDetails, metadata_ipfs_hash, tags, history)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(LaunchService)));
