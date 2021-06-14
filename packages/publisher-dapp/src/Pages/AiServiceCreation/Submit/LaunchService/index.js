import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { aiServiceDetailsActions, loaderActions, organizationActions } from "../../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../../constant";
import { useStyles } from "./styles";
import DaemonConfig from "../../../../Components/DaemonConfig";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import ReadyToLaunch from "../ReadyToLaunch";
import { checkIfKnownError } from "shared/dist/utils/error";
import DaemonConfigModal from "./DaemonConfigModal";
import { LoaderContent } from "../../../../Utils/Loader";
import { organizationSetupStatuses } from "../../../../Utils/organizationSetup";
import ValidationError from "shared/dist/utils/validationError";

class LaunchService extends React.Component {
  state = { daemonConfig: {}, alert: {}, continueToLaunch: false, showDaemonConfigModal: false };

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
    try {
      this.setState({ alert: {} });
      const {
        publishToIPFS,
        organization,
        serviceDetails,
        history,
        publishService,
        getLatestOrgDetails,
        getLatestOrgLoader,
      } = this.props;
      getLatestOrgLoader();
      const orgList = await getLatestOrgDetails();
      const selectedOrg = orgList[0];
      const orgStatus = selectedOrg.state.state;
      if (orgStatus !== organizationSetupStatuses.PUBLISHED) {
        if (orgStatus === organizationSetupStatuses.PUBLISH_IN_PROGRESS) {
          throw new ValidationError("Organization is being published in blockchain. Service cannot be published now");
        }
        throw new ValidationError("Organization must be published before publishing the service");
      }
      if (serviceDetails.serviceState.state === serviceCreationStatus.PUBLISHED) {
        throw new ValidationError("Service is already published. No new changes to be published.");
      }
      if (serviceDetails.serviceState.state === serviceCreationStatus.PUBLISH_IN_PROGRESS) {
        throw new ValidationError("Service is already being published. Please wait.");
      }
      if (serviceDetails.serviceState.state !== serviceCreationStatus.APPROVED) {
        throw new ValidationError("Service is not yet approved. Please submit for approval.");
      }
      const { metadata_ipfs_hash } = await publishToIPFS(organization.uuid, serviceDetails.uuid);
      await publishService(organization, serviceDetails, metadata_ipfs_hash, history);
    } catch (e) {
      this.props.stopAppLoader();
      if (checkIfKnownError(e)) {
        return this.setState({ alert: { type: alertTypes.ERROR, message: e.message } });
      }
      return this.setState({
        alert: { type: alertTypes.ERROR, message: "Something went wrong. Please try later" },
      });
    }
  };

  handleContinueToLaunch = () => {
    this.setState({ continueToLaunch: true });
  };

  handleDaemonConfigModalState = show => {
    this.setState({ showDaemonConfigModal: show });
  };

  render() {
    const { classes, handleBackToDashboard } = this.props;
    const { daemonConfig, alert, continueToLaunch, showDaemonConfigModal } = this.state;

    if (continueToLaunch) {
      return (
        <Fragment>
          <ReadyToLaunch
            handlePublish={this.handlePublishToBlockchain}
            handleBackToDashboard={handleBackToDashboard}
            openDaemonConfigModal={() => this.handleDaemonConfigModalState(true)}
            alert={alert}
          />
          <DaemonConfigModal
            open={showDaemonConfigModal}
            handleClose={() => this.handleDaemonConfigModalState(false)}
            daemonConfig={daemonConfig}
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
            configuration file with your <span>Production Ready Configuration File.</span> Please copy and replace your
            configuration file with the one given below. After replacing the configuration file, validate the endpoint
            to proceed to launch the service.
          </Typography>

          <DaemonConfig config={daemonConfig} />

          <div className={classes.launchServiceAlertButtonContainer}>
            <AlertBox
              type={alertTypes.WARNING}
              message="Use the configuration provided and restart your deamon."
              link="Learn More"
              linkTo="https://github.com/singnet/snet-daemon#configuration"
              icon={HourglassEmptyIcon}
              header="Please Update Production Ready Configuration"
            />
            <SNETButton color="primary" variant="contained" children="Continue" onClick={this.handleContinueToLaunch} />
          </div>
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
  publishService: (organization, serviceDetails, metadata_ipfs_hash, history) =>
    dispatch(aiServiceDetailsActions.publishService(organization, serviceDetails, metadata_ipfs_hash, history)),
  submitServiceDetailsForReview: (orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails)),
  getLatestOrgLoader: () => dispatch(loaderActions.startAppLoader(LoaderContent.GET_LATEST_ORG)),
  getLatestOrgDetails: () => dispatch(organizationActions.getStatus),
  stopAppLoader: () => dispatch(loaderActions.stopAppLoader()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(LaunchService)));
