import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import last from "lodash/last";
import ProgressBar from "shared/dist/components/ProgressBar";

import { serviceCreationSections, serviceCreationStatus, progressText, sections, progressStatus } from "./constant";
import { ServiceCreationRoutes } from "./ServiceCreationRouter/Routes";
import ServiceCreationRouter from "./ServiceCreationRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";
import { aiServiceDetailsActions, aiServiceListActions, loaderActions } from "../../Services/Redux/actionCreators";
import Loader from "./Loader";
import { LoaderContent } from "../../Utils/Loader";
import EditHeader from "./EditHeader";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

class AiServiceCreation extends Component {
  navigateToSubmitIfRejected = async status => {
    if (status === serviceCreationStatus.REJECTED) {
      const { history, match } = this.props;
      const { orgUuid, serviceUuid } = match.params;
      await history.push(
        ServiceCreationRoutes.SUBMIT.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid)
      );
    }
  };
 validateservicemetadata = () => {
    const {shortDescription,longDescription,tags,projectURL,contributors} = this.props.serviceDetails;
    return (shortDescription.length && longDescription.length && tags.length && projectURL.length  && contributors.length);
  };
  progressStatus = () => {
    let progressStage = {};
    const { progressStages, assets, shortDescription, demoComponentAvailable } = this.props.serviceDetails;

    const { demoFiles, protoFiles } = assets;

    for (const stage of progressStages) {
      if (stage.section === sections.SETUP_DEMO && !demoComponentAvailable) {
        progressStage = { ...progressStage, [stage.key]: progressStatus.COMPLETED };
      } else if (stage.section === sections.SETUP_DEMO && demoComponentAvailable && demoFiles.status) {
        progressStage = { ...progressStage, [stage.key]: demoFiles.status };
      } else if (stage.section === sections.PRICING_AND_DISTRIBUTION && protoFiles.status) {
        progressStage = { ...progressStage, [stage.key]: protoFiles.status };
      } else if (stage.section === sections.AI_PROFILE && this.validateservicemetadata()) {
        progressStage = { ...progressStage, [stage.key]: progressStatus.COMPLETED };
      } else {
        progressStage = { ...progressStage, [stage.key]: stage.status };
      }

      if (
        (stage.section === sections.LAUNCH && demoFiles.status === progressStatus.PENDING) ||
        protoFiles.status === progressStatus.PENDING
      ) {
        progressStage = { ...progressStage, [stage.key]: progressStatus.PENDING };
      }

      if (stage.section === sections.LAUNCH) {
        if (
          demoComponentAvailable &&
          demoFiles.status === progressStatus.SUCCEEDED &&
          protoFiles.status === progressStatus.SUCCEEDED
        ) {
          progressStage = { ...progressStage, [stage.key]: progressStatus.COMPLETED };
        }

        if (!demoComponentAvailable && protoFiles.status === progressStatus.SUCCEEDED) {
          progressStage = { ...progressStage, [stage.key]: progressStatus.COMPLETED };
        }
      }
    }

    return progressStage;
  };

  initData = async () => {
    const {
      getAiServiceList,
      getServiceDetails,
      initServiceCreationLoader,
      stopInitServiceCreationLoader,
      orgId,
    } = this.props;
    const { orgUuid, serviceUuid } = this.props.match.params;
    initServiceCreationLoader();
    await Promise.all([getAiServiceList(orgUuid), getServiceDetails(orgUuid, serviceUuid, orgId)]);
    stopInitServiceCreationLoader();
  };

  componentDidMount = async () => {
    await this.initData();
  };

  componentDidUpdate = async prevProps => {
    const { orgId, orgUuid, serviceUuid, serviceDetails } = this.props;
    this.navigateToSubmitIfRejected(serviceDetails.serviceState.state);

    if (
      orgId &&
      orgUuid &&
      serviceUuid &&
      prevProps.serviceUuid &&
      (orgUuid !== prevProps.orgUuid || serviceUuid !== prevProps.serviceUuid)
    ) {
      await this.initData();
    }
  };

  activeSection = () => {
    const path = this.props.location.pathname;
    const { PROFILE, DEMO, PRICING_AND_DISTRIBUTION, LAUNCH } = serviceCreationSections;
    if (path.includes(last(ServiceCreationRoutes.PROFILE.path.split("/")))) {
      return PROFILE;
    }
    if (path.includes(last(ServiceCreationRoutes.DEMO.path.split("/")))) {
      return DEMO;
    }
    if (path.includes(last(ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path.split("/")))) {
      return PRICING_AND_DISTRIBUTION;
    }
    if (path.includes(last(ServiceCreationRoutes.LAUNCH.path.split("/")))) {
      return LAUNCH;
    }
    return PROFILE;
  };

  handleBackToDashboard = () => {
    const { orgUuid, history } = this.props;
    history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
  };

  handleSubmit = async () => {
    const {
      serviceDetails,
      orgUuid,
      serviceUuid,
      history,
      saveServiceDetails,
      publishService,
      organization,
      launchAiService,
    } = this.props;

    try {
      await saveServiceDetails(orgUuid, serviceUuid, serviceDetails);

      const { publish_to_blockchain, service_metadata_ipfs_hash } = await launchAiService(orgUuid, serviceUuid);
      if (publish_to_blockchain) {
        await publishService(organization, serviceDetails, service_metadata_ipfs_hash, history);
      }
      this.handleBackToDashboard();
    } catch (e) {
      throw e;
    }
  };

  handleSectionClick = progressNumber => {
    const { history, match, serviceDetails } = this.props;
    const { orgUuid, serviceUuid } = match.params;
    if (serviceDetails.serviceState.state === serviceCreationStatus.REJECTED) {
      return;
    }
    const [key] = Object.entries(serviceCreationSections).find(([_key, value]) => value.key === progressNumber);
    if (ServiceCreationRoutes[key]) {
      history.push(ServiceCreationRoutes[key].path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
    }
  };

  handleServiceDetailsLeafChange = (name, value) => {
    this.props.setAiServiceDetailLeaf(name, value);
    this.props.setServiceTouchFlag(true);
  };

  handleHeroImageChange = url => {
    this.props.setServiceTouchFlag(true);
    this.props.setServiceHeroImageUrl(url);
  };

  handleDemoFilesChange = url => {
    this.props.setServiceTouchFlag(true);
    this.props.setServiceDemoFilesUrl(url);
  };

  handleProtoFilesChange = url => {
    this.props.setServiceTouchFlag(true);
    this.props.setServiceDetailsProtoUrl(url);
  };

  handleServiceProviderCommentsChange = comments => {
    this.props.setServiceProviderComment(comments);
  };

  handleGroupsChange = groups => {
    this.props.setServiceTouchFlag(true);
    this.props.setAiServiceGroups(groups);
  };

  handleServiceStateChange = updatedState => {
    this.props.setServiceTouchFlag(true);
    this.props.setAiServiceStateState(updatedState);
  };

  getTheProgressText = () => {
    const { assets, demoComponentAvailable } = this.props.serviceDetails;

    return progressText.map(progress => {
      if (
        assets.demoFiles.status === progressStatus.PENDING &&
        progress.section === sections.SETUP_DEMO &&
        demoComponentAvailable
      ) {
        return "Demo Component build is in progress...";
      }

      if (
        assets.protoFiles.status === progressStatus.PENDING &&
        progress.section === sections.PRICING_AND_DISTRIBUTION
      ) {
        return "Proto compilation is in progress...";
      }

      return progress.title;
    });
  };

  render() {
    const { classes, serviceFoundInBlockchain, serviceTouched, setServiceDetailsInRedux } = this.props;
    return (
      <div className={classes.serviceCreationContainer}>
        {serviceFoundInBlockchain ? (
          <EditHeader onBack={this.handleBackToDashboard} allowSubmit={serviceTouched} onSubmit={this.handleSubmit} />
        ) : (
          <Heading {...this.activeSection().heading} />
        )}
        <ProgressBar
          activeSection={this.activeSection().key}
          progressText={this.getTheProgressText()}
          onSectionClick={progressNumber => this.handleSectionClick(progressNumber)}
          progressStatus={this.progressStatus()}
        />
        <ServiceCreationRouter
          handleSubmit={this.handleSubmit}
          serviceDetails={this.props.serviceDetails}
          changeServiceDetailsLeaf={this.handleServiceDetailsLeafChange}
          changeHeroImage={this.handleHeroImageChange}
          changeDemoFiles={this.handleDemoFilesChange}
          changeProtoFiles={this.handleProtoFilesChange}
          changeGroups={this.handleGroupsChange}
          changeServiceProviderComments={this.handleServiceProviderCommentsChange}
          changeServiceState={this.handleServiceStateChange}
          setServiceDetailsInRedux={setServiceDetailsInRedux}
          handleBackToDashboard={this.handleBackToDashboard}
        />
        <Loader />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  organization: state.organization,
  orgId: state.organization.id,
  orgUuid: state.organization.uuid,
  serviceUuid: state.aiServiceDetails.uuid,
  serviceFoundInBlockchain: state.aiServiceDetails.foundInBlockchain,
  serviceTouched: state.aiServiceDetails.touched,
  serviceDetails: state.aiServiceDetails,
  serviceStatus: state.aiServiceDetails.progressStages,
});

const mapDispatchToProps = dispatch => ({
  initServiceCreationLoader: () =>
    dispatch(loaderActions.startInitServiceCreationLoader(LoaderContent.INIT_SERVICE_CREATION)),
  stopInitServiceCreationLoader: () => dispatch(loaderActions.stopInitServiceCreationLoader()),
  getAiServiceList: (orgUuid, pagination) => dispatch(aiServiceListActions.getAiServiceList(orgUuid, pagination)),
  getServiceDetails: (orgUuid, serviceUuid, orgId) =>
    dispatch(aiServiceDetailsActions.getServiceDetails(orgUuid, serviceUuid, orgId)),
  saveServiceDetails: (orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails)),
  setServiceDetailsInRedux: serviceDetails => dispatch(aiServiceDetailsActions.setAllAttributes(serviceDetails)),
  submitServiceDetailsForReview: (orgUuid, serviceUuid, serviceDetails) =>
    dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails)),
  publishService: (organization, serviceDetails, metadata_ipfs_hash, history) =>
    dispatch(aiServiceDetailsActions.publishService(organization, serviceDetails, metadata_ipfs_hash, history)),
  setServiceTouchFlag: Boolean => dispatch(aiServiceDetailsActions.setServiceTouchedFlag(Boolean)),
  setServiceName: name => dispatch(aiServiceDetailsActions.setServiceName(name)),
  setServiceHeroImageUrl: url => dispatch(aiServiceDetailsActions.setServiceHeroImageUrl(url)),
  setServiceDemoFilesUrl: url => dispatch(aiServiceDetailsActions.setServiceDemoFilesUrl(url)),
  setServiceDetailsProtoUrl: url => dispatch(aiServiceDetailsActions.setServiceDetailsProtoUrl(url)),
  setServiceProviderComment: comments => dispatch(aiServiceDetailsActions.setServiceProviderComment(comments)),
  setAiServiceGroups: groups => dispatch(aiServiceDetailsActions.setAiServiceGroups(groups)),
  setAiServiceStateState: updatedState => dispatch(aiServiceDetailsActions.setAiServiceStateState(updatedState)),
  setAiServiceDetailLeaf: (name, value) => dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf(name, value)),
  launchAiService: (orgUuid, serviceUuid) => dispatch(aiServiceDetailsActions.launchAiService(orgUuid, serviceUuid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AiServiceCreation));
