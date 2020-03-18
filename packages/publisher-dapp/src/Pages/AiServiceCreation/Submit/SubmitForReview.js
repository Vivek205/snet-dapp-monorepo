import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import SNETTextarea from "shared/dist/components/SNETTextarea";
import AlertBox from "shared/dist/components/AlertBox";
import { useStyles } from "./styles";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { initSDK } from "shared/dist/utils/snetSdk";
import SNETButton from "shared/dist/components/SNETButton";
import DaemonConfig from "./DaemonConfig";

class SubmitForReview extends React.Component {
  state = {
    daemonConfig: {},
    charCount: 0,
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

  handleConnectMM = async () => {
    const sdk = await initSDK();
    if (sdk.account.address) {
      this.setState({ MMAddress: sdk.account.address, disabledTextfield: false });
    }
  };

  handleCommentChange = event => {
    this.setState({ charCount: event.target.value.length });
    this.props.setServiceProviderComment(event.target.value);
  };

  handleSubmitForReview = async () => {
    // TODO remove orgId. MPS has to figure out orgId from orgUuid
    const { submitServiceDetailsForReview, orgId, orgUuid, serviceDetails } = this.props;
    await submitServiceDetailsForReview(orgId, orgUuid, serviceDetails.uuid, serviceDetails);
  };

  render() {
    const { classes, serviceDetails } = this.props;
    const { daemonConfig, MMAddress, charCount } = this.state;

    return (
      <Grid container className={classes.submitContainer}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
          <Typography variant="h6">Review Process</Typography>
          <div className={classes.wrapper}>
            <Typography className={classes.submitDescription}>
              Once you have submitted your service, SingularityNET will review your service protocols. You will be
              notified once the review has been completed, please be patient as this process could take a few days.
            </Typography>
            <DaemonConfig config={daemonConfig} footerNote="lore ipsum doler amet" />
            <div className={classes.commentField}>
              <SNETTextarea
                label="Comments for Reviewers (optional)"
                minCount={charCount}
                maxCount={5000}
                rowCount={8}
                colCount={105}
                value={serviceDetails.comments.serviceProvider[0]}
                onChange={this.handleCommentChange}
              />
            </div>
            <AlertBox type={alert.type} message={alert.message} />
            <div className={classes.btnContainer}>
              {MMAddress ? (
                <SNETButton
                  children="submit for review"
                  color="primary"
                  variant="contained"
                  onClick={this.handleSubmitForReview}
                />
              ) : (
                <SNETButton
                  children="connect metamask"
                  color="primary"
                  variant="contained"
                  onClick={this.handleConnectMM}
                />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  serviceDetails: state.aiServiceDetails,
  orgId: state.organization.id,
  orgUuid: state.organization.uuid,
});

const mapDispatchToProps = dispatch => ({
  getSampleDaemonConfig: (orgUuid, serviceUuid, testDaemon) =>
    dispatch(aiServiceDetailsActions.getSampleDaemonConfig(orgUuid, serviceUuid, testDaemon)),
  setServiceProviderComment: comment => dispatch(aiServiceDetailsActions.setServiceProviderComment(comment)),
  submitServiceDetailsForReview: (orgId, orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgId, orgUuid, serviceUuid, serviceDetails)),
});

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(SubmitForReview));
