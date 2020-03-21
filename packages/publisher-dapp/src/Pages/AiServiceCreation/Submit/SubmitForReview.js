import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import SNETTextarea from "shared/dist/components/SNETTextarea";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { useStyles } from "./styles";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import SNETButton from "shared/dist/components/SNETButton";
import DaemonConfig from "./DaemonConfig";
import { organizationSetupStatuses } from "../../../Utils/organizationSetup";
import { serviceCreationStatus } from "../constant";
import { checkIfKnownError } from "shared/dist/utils/error";
import validator from "shared/dist/utils/validator";
import { submitServiceConstraints } from "./validationConstraints";
import { generateDetailedErrorMessageFromValidation } from "../../../Utils/validation";

class SubmitForReview extends React.Component {
  state = {
    daemonConfig: {},
    charCount: 0,
    alert: {},
  };

  fetchSampleDaemonConfig = async () => {
    try {
      const { getSampleDaemonConfig, orgUuid, serviceDetails } = this.props;

      const daemon_config = await getSampleDaemonConfig(orgUuid, serviceDetails.uuid, true);
      this.setState({ daemonConfig: daemon_config });
    } catch (e) {
      // Alert user daemon config cannot be retrieved
    }
  };

  componentDidUpdate = async prevProps => {
    const { serviceDetails } = this.props;
    if (serviceDetails.uuid !== prevProps.serviceDetails.uuid) {
      await this.fetchSampleDaemonConfig();
    }
  };

  componentDidMount = async () => {
    await this.fetchSampleDaemonConfig();
  };

  handleCommentChange = event => {
    this.props.setServiceProviderComment(event.target.value);
  };

  handleSubmitForReview = async () => {
    try {
      this.setState({ alert: {} });
      const { submitServiceDetailsForReview, orgUuid, orgStatus, serviceDetails } = this.props;
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
      if (serviceDetails.serviceState.state !== serviceCreationStatus.DRAFT) {
        return this.setState({
          alert: { type: alertTypes.ERROR, message: "No changes in draft. Please edit a field before submitting" },
        });
      }

      const isNotValid = validator(serviceDetails, submitServiceConstraints);
      if (isNotValid) {
        const errorMessage = generateDetailedErrorMessageFromValidation(isNotValid);
        return this.setState({ alert: { type: alertTypes.ERROR, children: errorMessage } });
      }
      await submitServiceDetailsForReview(orgUuid, serviceDetails.uuid, serviceDetails);
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
    const charCount = serviceDetails.comments.SERVICE_PROVIDER.length;
    return (
      <Grid container className={classes.submitContainer}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
          <Typography variant="h6">Review Process</Typography>
          <div className={classes.wrapper}>
            <Typography className={classes.submitDescription}>
              Once you have submitted your service, SingularityNET will review your service protocols. You will be
              notified once the review has been completed, please be patient as this process could take a few days.
            </Typography>
            <DaemonConfig
              config={daemonConfig}
              footerNote="Please use the above configuration values in your daemon configuration and restart your daemon. This will allow your AI service to be tested by the curation team of the SingularityNet foundation. This is essential for approving your service."
            />
            <div className={classes.commentField}>
              <SNETTextarea
                label="Comments for Reviewers (optional)"
                minCount={charCount}
                maxCount={5000}
                rowCount={8}
                colCount={105}
                value={serviceDetails.comments.SERVICE_PROVIDER}
                onChange={this.handleCommentChange}
              />
            </div>
            <AlertBox type={alert.type} message={alert.message} children={alert.children} />
            <div className={classes.btnContainer}>
              <SNETButton
                children="submit for review"
                color="primary"
                variant="contained"
                onClick={this.handleSubmitForReview}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  serviceDetails: state.aiServiceDetails,
  orgUuid: state.organization.uuid,
  orgStatus: state.organization.state.state,
});

const mapDispatchToProps = dispatch => ({
  getSampleDaemonConfig: (orgUuid, serviceUuid, testDaemon) =>
    dispatch(aiServiceDetailsActions.getSampleDaemonConfig(orgUuid, serviceUuid, testDaemon)),
  setServiceProviderComment: comment => dispatch(aiServiceDetailsActions.setServiceProviderComment(comment)),
  submitServiceDetailsForReview: (orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails)),
});

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(SubmitForReview));
