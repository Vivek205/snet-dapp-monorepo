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
import { initialAiServiceDetailsState } from "../../Services/Redux/reducers/aiServiceDetailsReducer";

class AiServiceCreation extends Component {
  state = {
    serviceDetails: initialAiServiceDetailsState,
  };

  navigateToSubmitIfRejected = async status => {
    if (status === serviceCreationStatus.REJECTED) {
      const { history, match } = this.props;
      const { orgUuid, serviceUuid } = match.params;
      await history.push(
        ServiceCreationRoutes.SUBMIT.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid)
      );
    }
  };

  progressStatus = () => {
    let progressStage = {};
    const { progressStages, assets, shortDescription } = this.props.serviceDetails;

    const { demoFiles, protoFiles } = assets;

    for (const stage of progressStages) {
      if (stage.section === sections.SETUP_DEMO && demoFiles.status) {
        progressStage = { ...progressStage, [stage.key]: demoFiles.status };
      } else if (stage.section === sections.PRICING_AND_DISTRIBUTION && protoFiles.status) {
        progressStage = { ...progressStage, [stage.key]: protoFiles.status };
      } else if (stage.section === sections.AI_PROFILE && shortDescription) {
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

      if (
        stage.section === sections.LAUNCH &&
        demoFiles.status === progressStatus.SUCCEEDED &&
        protoFiles.status === progressStatus.SUCCEEDED
      ) {
        progressStage = { ...progressStage, [stage.key]: progressStatus.COMPLETED };
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
      serviceStatus,
    } = this.props;
    const { orgUuid, serviceUuid } = this.props.match.params;
    initServiceCreationLoader();
    const response = await Promise.all([getAiServiceList(orgUuid), getServiceDetails(orgUuid, serviceUuid, orgId)]);
    const serviceDetails = response[1];
    this.setState({ serviceDetails, serviceStatus });
    this.navigateToSubmitIfRejected(serviceDetails.serviceState.state);
    stopInitServiceCreationLoader();
  };

  componentDidMount = async () => {
    await this.initData();
  };

  componentDidUpdate = async prevProps => {
    const { orgId, orgUuid, serviceUuid, serviceTouched, serviceDetails } = this.props;

    if (
      orgId &&
      orgUuid &&
      serviceUuid &&
      prevProps.serviceUuid &&
      (orgUuid !== prevProps.orgUuid || serviceUuid !== prevProps.serviceUuid)
    ) {
      await this.initData();

      if (this.state.serviceDetails.touched !== serviceTouched) {
        this.setState(prevState => ({ serviceDetails: { ...prevState.serviceDetails, touched: serviceTouched } }));
      }
    }

    if (
      serviceDetails.serviceState.state !== prevProps.serviceDetails.serviceState.state &&
      serviceDetails.serviceState.state !== this.state.serviceDetails.serviceState.state
    ) {
      this.handleServiceStateChange(serviceDetails.serviceState.state);
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
    const { serviceDetails } = this.state;
    const {
      orgUuid,
      serviceUuid,
      history,
      saveServiceDetails,
      setServiceDetailsInRedux,
      publishToIPFS,
      publishService,
      organization,
    } = this.props;

    try {
      setServiceDetailsInRedux(serviceDetails);
      await saveServiceDetails(orgUuid, serviceUuid, serviceDetails);

      const { metadata_ipfs_hash } = await publishToIPFS(orgUuid, serviceUuid);
      await publishService(organization, serviceDetails, metadata_ipfs_hash, history);
      this.handleBackToDashboard();
    } catch (e) {
      throw e;
    }
  };

  handleSectionClick = progressNumber => {
    const { serviceDetails } = this.state;
    const { history, match, setServiceDetailsInRedux } = this.props;
    setServiceDetailsInRedux(serviceDetails);
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
    this.setState(prevState => ({ serviceDetails: { ...prevState.serviceDetails, [name]: value, touched: true } }));
  };

  handleHeroImageChange = url => {
    this.setState(prevState => ({
      serviceDetails: {
        ...prevState.serviceDetails,
        touched: true,
        assets: {
          ...prevState.serviceDetails.assets,
          heroImage: { ...prevState.serviceDetails.assets.heroImage, url },
        },
      },
    }));
  };

  handleDemoFilesChange = url => {
    this.setState(prevState => ({
      serviceDetails: {
        ...prevState.serviceDetails,
        touched: true,
        assets: {
          ...prevState.serviceDetails.assets,
          demoFiles: { ...prevState.serviceDetails.assets.demoFiles, url },
        },
      },
    }));
  };

  handleProtoFilesChange = url => {
    this.setState(prevState => ({
      serviceDetails: {
        ...prevState.serviceDetails,
        touched: true,
        assets: {
          ...prevState.serviceDetails.assets,
          protoFiles: { ...prevState.serviceDetails.assets.protoFiles, url },
        },
      },
    }));
  };

  handleServiceProviderCommentsChange = comments => {
    this.setState(prevState => ({
      serviceDetails: {
        ...prevState.serviceDetails,
        comments: {
          ...prevState.serviceDetails.comments,
          SERVICE_PROVIDER: comments,
        },
      },
    }));
  };

  handleGroupsChange = groups => {
    this.setState(prevState => ({ serviceDetails: { ...prevState.serviceDetails, groups, touched: true } }));
  };

  handleServiceStateChange = updatedState => {
    this.setState(prevState => ({
      serviceDetails: {
        ...prevState.serviceDetails,
        serviceState: { ...prevState.serviceDetails.serviceState, state: updatedState },
      },
    }));
  };

  getTheProgressText = () => {
    const { assets } = this.props.serviceDetails;

    return progressText.map(progress => {
      if (assets.demoFiles.status === progressStatus.PENDING && progress.section === sections.SETUP_DEMO) {
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
          serviceDetails={this.state.serviceDetails}
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
  publishToIPFS: (orgUuid, serviceUuid) => dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid)),
  publishService: (organization, serviceDetails, metadata_ipfs_hash, history) =>
    dispatch(aiServiceDetailsActions.publishService(organization, serviceDetails, metadata_ipfs_hash, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AiServiceCreation));
