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
import { useStyles } from "./styles";
import DaemonConfig from "../DaemonConfig";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { ServiceCreationRoutes } from "../../ServiceCreationRouter/Routes";
import ChangeRequested from "../ChangeRequested";
import Rejected from "../Rejected";
import { organizationSetupStatuses } from "../../../../Utils/organizationSetup";
import validator from "shared/dist/utils/validator";
import { submitServiceConstraints } from "../validationConstraints";
import { checkIfKnownError } from "shared/dist/utils/error";
import { generateDetailedErrorMessageFromValidation } from "../../../../Utils/validation";

class LaunchService extends React.Component {
  state = { daemonConfig: {}, alert: {} };

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

  handleContinueEdit = () => {
    const { history, match } = this.props;
    const { orgUuid, serviceUuid } = match.params;
    history.push(ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  handleSubmitComment = async () => {
    try {
      this.setState({ alert: {} });
      const { submitServiceDetailsForReview, organization, orgStatus, serviceDetails } = this.props;
      if (orgStatus !== organizationSetupStatuses.PUBLISHED) {
        if (orgStatus === organizationSetupStatuses.PUBLISH_IN_PROGRESS) {
          return this.setState({
            alert: {
              type: alertTypes.ERROR,
              message:
                "Organization is being published in blockchain. Service can be submitted only when organization is published",
            },
          });
        }
        return this.setState({
          alert: {
            type: alertTypes.ERROR,
            message: "Organization is not published. Please publish the organization before publishing the service",
          },
        });
      }
      const isNotValid = validator(serviceDetails, submitServiceConstraints);
      if (isNotValid) {
        const errorMessage = generateDetailedErrorMessageFromValidation(isNotValid);
        return this.setState({ alert: { type: alertTypes.ERROR, children: errorMessage } });
      }
      await submitServiceDetailsForReview(organization.uuid, serviceDetails.uuid, serviceDetails);
    } catch (e) {
      if (checkIfKnownError(e)) {
        return this.setState({ alert: { type: alertTypes.ERROR, message: e.message } });
      }
      this.setState({ alert: { type: alertTypes.ERROR, message: "Something Went wrong. Please try later." } });
    }
  };

  render() {
    const { classes, serviceDetails } = this.props;
    const { daemonConfig, alert } = this.state;
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
            <ContinueLaunchTable />
            <div className={classes.launchServiceAlertContainer}>
              <AlertBox type={alert.type} message={alert.message} />
            </div>
          </Grid>
        </div>
      );
    }

    if (serviceDetails.serviceState.state === serviceCreationStatus.CHANGE_REQUESTED) {
      return (
        <ChangeRequested
          onContinueToEdit={this.handleContinueEdit}
          onSubmitComment={this.handleSubmitComment}
          alert={alert}
        />
      );
    }

    if (serviceDetails.serviceState.state === serviceCreationStatus.REJECTED) {
      return <Rejected />;
    }

    return (
      <div className={classes.launchServiceContainer}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
          <Typography variant="h6">Review Process</Typography>
          <Typography className={classes.reviewProcessDescription}>
            Once you have submitted your service, SingularityNET will review your service. You will be notified once the
            review has been completed, please be patient as this process could take a few days.
          </Typography>
          <LaunchTable handlePublishToBlockchain={this.handlePublishToBlockchain} />
          <AlertBox type={alert.type} message={alert.message} />
          <DaemonConfig
            config={daemonConfig}
            footerNote="Please use the above configuration values in your daemon configuration. This is to ensure that your daemon is not in the curation mode anymore. Once the Service has been successfully published on the SingularityNet Platform, restart the daemon."
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  organization: state.organization,
  serviceDetails: state.aiServiceDetails,
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
