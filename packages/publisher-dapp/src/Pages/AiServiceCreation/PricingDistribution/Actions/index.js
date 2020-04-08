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
      for (let i = 0; i < isNotValid.length; i++) {
        if (isNotValid[i].includes(",")) {
          let res = isNotValid[i].split(",");
          delete isNotValid[i];
          for (let j = 0; j < res.length; j++) {
            isNotValid.push(...res);
          }
        }
      }
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
    <div>
      <AlertBox type={alert.type} message={alert.message} children={alert.children} />

      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="previous step" onClick={handleBack} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default Actions;
