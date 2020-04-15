import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./styles";
import { individualVerificationStatusList } from "../../../constant";
import Pending from "./Pending";
import Denied from "./Denied";
import Approved from "./Approved";
import RelatedLinks from "./RelatedLinks";
import { checkIfKnownError } from "shared/src/utils/error";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { individualVerificationActions } from "../../../../../Services/Redux/actionCreators/userActions";
import { AuthenticateRoutes } from "../../AuthenitcateRouter/Routes";

const StatusComponents = {
  [individualVerificationStatusList.PENDING]: Pending,
  [individualVerificationStatusList.APPROVED]: Approved,
  [individualVerificationStatusList.REJECTED]: Denied,
  [individualVerificationStatusList.FAILED]: Denied,
  [individualVerificationStatusList.ERROR]: Denied,
};

const selectState = state => ({
  status: state.user.individualVerificationStatus,
  rejectReason: state.user.individualVerificationRejectReason,
});

const IndividualStatus = ({ classes, history }) => {
  const { status, rejectReason } = useSelector(selectState);
  const [alert, setAlert] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === individualVerificationStatusList.NOT_STARTED) {
      history.push(AuthenticateRoutes.INDIVIDUAL.path);
    }
  }, [history, status]);

  const Component = StatusComponents[status];

  const handleVerify = async () => {
    try {
      const { redirect_url: redirectUrl } = await dispatch(individualVerificationActions.initiateVerification());
      await window.location.replace(redirectUrl);
    } catch (e) {
      if (checkIfKnownError(e)) {
        return setAlert({ type: alertTypes.ERROR, message: e.message });
      }
      return setAlert({ type: alertTypes.ERROR, message: "Unable to initiate Jumio verification. Please try again" });
    }
  };

  if (Component) {
    return (
      <Grid container spacing={24} className={classes.individualStatusContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.description}>
          <Typography variant="h3">Welcome to the AI Publisher</Typography>
          <Typography>With this publisher portal, you can publish and manage your AI services.</Typography>
        </Grid>
        <Component handleVerify={handleVerify} rejectReason={rejectReason} />
        <AlertBox type={alert.type} message={alert.message} />
        <RelatedLinks />
      </Grid>
    );
  }

  return <div>Status not available</div>;
};

export default withStyles(useStyles)(IndividualStatus);
