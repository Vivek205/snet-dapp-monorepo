import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../../constant";
import { useStyles } from "./styles";
import DaemonConfig from "../DaemonConfig";
import { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import ReadyToLaunch from "../ReadyToLaunch";

class LaunchService extends React.Component {
  state = { daemonConfig: {}, alert: {}, continueToLaunch: false };

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
    if (this.props.serviceDetails.uuid && isEmpty(this.state.daemonConfig)) {
      await this.fetchSampleDaemonConfig();
    }
  };

  componentDidUpdate = async () => {
    if (this.props.serviceDetails.uuid && isEmpty(this.state.daemonConfig)) {
      await this.fetchSampleDaemonConfig();
    }
  };

  handlePublishToBlockchain = async () => {
    this.setState({ alert: {} });
    const { publishToIPFS, organization, serviceDetails, history, publishService } = this.props;
    if (serviceDetails.serviceState.state === serviceCreationStatus.PUBLISHED) {
      return this.setState({
        alert: { type: alertTypes.ERROR, message: "Service is already published. No new changes to be published " },
      });
    }
    if (serviceDetails.serviceState.state === serviceCreationStatus.PUBLISH_IN_PROGRESS) {
      return this.setState({
        alert: { type: alertTypes.ERROR, message: "Service is already being published. Please wait." },
      });
    }
    if (serviceDetails.serviceState.state !== serviceCreationStatus.APPROVED) {
      return this.setState({
        alert: { type: alertTypes.ERROR, message: "Service is not yet approved. Please submit for approval " },
      });
    }
    const { metadata_ipfs_hash } = await publishToIPFS(organization.uuid, serviceDetails.uuid);
    await publishService(organization, serviceDetails, metadata_ipfs_hash, serviceDetails.tags, history);
  };

  handleContinueToLaunch = () => {
    this.setState({ continueToLaunch: true });
  };

  render() {
    const { classes, handleBackToDashboard } = this.props;
    const { daemonConfig, alert, continueToLaunch } = this.state;

    if (continueToLaunch) {
      return (
        <Fragment>
          <ReadyToLaunch
            handlePublish={this.handlePublishToBlockchain}
            handleBackToDashboard={handleBackToDashboard}
            alert={alert}
          />
        </Fragment>
      );
    }

    return (
      <div className={classes.launchServiceContainer}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
          <Typography variant="h6">Your AI Service Approved</Typography>
          <Typography className={classes.reviewProcessDescription}>
            Your service was reviewed and approved. To launch the service, you need to revert or replace your testing
            configuration file with your Production Ready Configuration File. Please copy and replace your configuration
            file with the one given below. After replacing the configuration file, validate the endpoint to proceed to
            launch the service.
          </Typography>

          <DaemonConfig
            config={daemonConfig}
            footerNote="Please use the above configuration values in your daemon configuration. This is to ensure that your daemon is not in the curation mode anymore. Once the Service has been successfully published on the SingularityNet Platform, restart the daemon."
          />

          <SNETButton
            color="primary"
            variant="contained"
            children="Continue to launch"
            onClick={this.handleContinueToLaunch}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  organization: state.organization,
  orgStatus: state.organization.state.state,
});

const mapDispatchToProps = dispatch => ({
  getSampleDaemonConfig: (orgUuid, serviceUuid, testDaemon) =>
    dispatch(aiServiceDetailsActions.getSampleDaemonConfig(orgUuid, serviceUuid, testDaemon)),
  publishToIPFS: (orgUuid, serviceUuid) => dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid)),
  publishService: (organization, serviceDetails, metadata_ipfs_hash, tags, history) =>
    dispatch(aiServiceDetailsActions.publishService(organization, serviceDetails, metadata_ipfs_hash, tags, history)),
  submitServiceDetailsForReview: (orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(LaunchService)));
