import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../../ServiceCreationRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
// import validator from "shared/dist/utils/validator";
// import { servicePricingValidationConstraints } from "../validationConstraints";
// import validationError from "shared/dist/utils/validationError";

const Actions = () => {
  const classes = useStyles();
  const history = useHistory();
  const serviceDetails = useSelector(state => state.aiServiceDetails);
  const { orgUuid, serviceUuid } = useParams();
  const dispatch = useDispatch();

  const handleFinishLater = async () => {
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
  };

  const handleBack = () => {
    history.push(ServiceCreationRoutes.DEMO.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleContinue = async () => {
    // const isNotValid = validator({}, servicePricingValidationConstraints);
    // if (isNotValid[0]) {
    //   throw validationError(isNotValid[0]);
    // }
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
    history.push(ServiceCreationRoutes.SUBMIT.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  return (
    <div className={classes.buttonsContainer}>
      <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
      <SNETButton color="primary" children="previous step" onClick={handleBack} />
      <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
    </div>
  );
};

export default Actions;
