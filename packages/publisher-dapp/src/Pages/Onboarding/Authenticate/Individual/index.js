// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withStyles } from "@material-ui/core/styles";
// import { useStyles } from "./styles";
// import { individualVerificationActions } from "../../../../Services/Redux/actionCreators/userActions";
// import { alertTypes } from "shared/dist/components/AlertBox";
// import { checkIfKnownError } from "shared/dist/utils/error";
// import { individualVerificationStatusList } from "../../constant";
// import { getEmailDomain } from "../../../../Utils/validation";
// import { GlobalRoutes } from "../../../../GlobalRouter/Routes";
// import { AuthenticateRoutes } from "../AuthenitcateRouter/Routes";
// import Organization from "../Organization";
// import OrgSetupStatus from "../../../OrgSetupStatus";

// const domainsToBeAutoApproved = ["singularitynet.io"];

// class Individual extends Component {
//   state = {
//     alert: {},
//   };

//   componentDidMount = async () => {
//     // const { status, getVerificationStatus } = this.props;
//     // const newStatusData = await getVerificationStatus(status);
//     // if (
//     //   !newStatusData.status ||
//     //   newStatusData.status === individualVerificationStatusList.NOT_STARTED ||
//     //   newStatusData.status === individualVerificationStatusList.CHANGE_REQUESTED
//     // ) {
//     //   return;
//     // }
//     this.props.history.push(AuthenticateRoutes.INDIVIDUAL_STATUS.path);
//   };

//   componentDidUpdate(prevProps) {
//     const { status } = this.props;

//     if (prevProps.status !== status) {
//       if (
//         !status ||
//         status === individualVerificationStatusList.NOT_STARTED ||
//         status === individualVerificationStatusList.CHANGE_REQUESTED
//       ) {
//         return;
//       }
//       this.props.history.push(AuthenticateRoutes.INDIVIDUAL_STATUS.path);
//     }
//   }

//   handleVerify = async () => {
//     try {
//       const { history, initiateVerification, setStatus } = this.props;
//       const { redirect_url: redirectUrl } = await initiateVerification();
//       const userDomain = getEmailDomain(this.props.userEmail);
//       if (domainsToBeAutoApproved.includes(userDomain)) {
//         await setStatus(individualVerificationStatusList.APPROVED);
//         return history.push(GlobalRoutes.INDIVIDUAL_STATUS.path);
//       }
//       await window.location.replace(redirectUrl);
//     } catch (e) {
//       if (checkIfKnownError(e)) {
//         return this.setState({ alert: { type: alertTypes.ERROR, message: e.message } });
//       }
//       return this.setState({
//         alert: { type: alertTypes.ERROR, message: "Unable to initiate ID verification. Please try again" },
//       });
//     }
//   };

//   render() {
//     const { orgStatus, status } = this.props;

//     if (
//       !orgStatus ||
//       !status ||
//       status === individualVerificationStatusList.CHANGE_REQUESTED ||
//       orgStatus === OrgSetupStatus.CHANGE_REQUESTED
//     ) {
//       return <Organization />;
//     }

//     return null;
//   }
// }

// const mapStateToProps = state => ({
//   orgStatus: state.organization.state.state,
//   status: state.user.individualVerificationStatus,
//   userEmail: state.user.email,
// });

// const mapDispatchToProps = dispatch => ({
//   initiateVerification: () => dispatch(individualVerificationActions.initiateVerification()),
//   // getVerificationStatus: () => dispatch(individualVerificationActions.getVerificationStatus()),
//   setStatus: status => dispatch(individualVerificationActions.setIndividualVerificationStatus(status)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Individual));
