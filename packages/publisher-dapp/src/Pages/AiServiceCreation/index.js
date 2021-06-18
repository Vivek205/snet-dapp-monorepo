import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import last from "lodash/last";
import ProgressBar from "shared/dist/components/ProgressBar";

import { progressText, serviceCreationSections, serviceCreationStatus } from "./constant";
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
    demoFileUploadStatus: false,
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
    const response = await Promise.all([getAiServiceList(orgUuid), getServiceDetails(orgUuid, serviceUuid, orgId)]);
    const serviceDetails = response[1];
    this.setState({ serviceDetails });
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
    const { PROFILE, DEMO, PRICING_AND_DISTRIBUTION, SUBMIT } = serviceCreationSections;
    if (path.includes(last(ServiceCreationRoutes.PROFILE.path.split("/")))) {
      return PROFILE;
    }
    if (path.includes(last(ServiceCreationRoutes.DEMO.path.split("/")))) {
      return DEMO;
    }
    if (path.includes(last(ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path.split("/")))) {
      return PRICING_AND_DISTRIBUTION;
    }
    if (path.includes(last(ServiceCreationRoutes.SUBMIT.path.split("/")))) {
      return SUBMIT;
    }
    return PROFILE;
  };

  handleBackToDashboard = () => {
    const { orgUuid, history } = this.props;
    history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
  };

  handleSubmit = async () => {
    const { serviceDetails } = this.state;
    const { orgUuid, serviceUuid, history, location, saveServiceDetails, setServiceDetailsInRedux } = this.props;
    setServiceDetailsInRedux(serviceDetails);
    await saveServiceDetails(orgUuid, serviceUuid, serviceDetails);
    if (!location.pathname.match(ServiceCreationRoutes.SUBMIT.match)) {
      history.push(ServiceCreationRoutes.SUBMIT.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
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

  changeTheProgressText = progressBarText => {
    progressBarText.splice(1, 1, "failed");
    return progressBarText;
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
          progressText={progressText}
          onSectionClick={progressNumber => this.handleSectionClick(progressNumber)}
        />
        <ServiceCreationRouter
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
  orgId: state.organization.id,
  orgUuid: state.organization.uuid,
  serviceUuid: state.aiServiceDetails.uuid,
  serviceFoundInBlockchain: state.aiServiceDetails.foundInBlockchain,
  serviceTouched: state.aiServiceDetails.touched,
  serviceDetails: state.aiServiceDetails,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(AiServiceCreation));
