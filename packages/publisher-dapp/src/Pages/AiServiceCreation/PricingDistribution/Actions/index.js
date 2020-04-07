import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../../ServiceCreationRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { GlobalRoutes } from "../../../../GlobalRouter/Routes";
import validator from "shared/dist/utils/validator";
import { servicePricingValidationConstraints } from "../validationConstraints";
import { generateDetailedErrorMessageFromValidation } from "../../../../Utils/validation";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
const Actions = () => {
  const classes = useStyles();
  const history = useHistory();
  const serviceDetails = useSelector(state => state.aiServiceDetails);
  const { orgUuid, serviceUuid } = useParams();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({});

  const handleBack = () => {
    history.push(ServiceCreationRoutes.DEMO.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleSave = async () => {
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
  };

  const handleContinue = async () => {
    const isNotValid = validator(serviceDetails, servicePricingValidationConstraints);

    if (isNotValid) {
      const errorMessage = generateDetailedErrorMessageFromValidation(isNotValid);
      return setAlert({ type: alertTypes.ERROR, children: errorMessage });
    }
    await handleSave();
    history.push(ServiceCreationRoutes.SUBMIT.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleFinishLater = async () => {
    await handleSave();
    history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
  };

  return (
    <div className={classes.buttonsContainer}>
      <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
      <SNETButton color="primary" children="previous step" onClick={handleBack} />
      <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      <span>
        {" "}
        <AlertBox type={alert.type} message={alert.message} children={alert.children} />
      </span>
    </div>
  );
};

export default Actions;
