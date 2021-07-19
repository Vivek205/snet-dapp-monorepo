import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { sections, progressStatus } from "../constant";

const selectState = state => ({
  serviceStatus: state.aiServiceDetails.progressStages,
});

const Actions = ({
  classes,
  serviceDetails,
  setServiceDetailsInRedux,
  setInvalidFieldsFlag,
  demoComponentAvailable,
}) => {
  const { serviceStatus } = useSelector(selectState);

  const history = useHistory();

  const { orgUuid, serviceUuid } = useParams();
  const dispatch = useDispatch();

  const handleBack = () => {
    history.push(ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleSave = async () => {
    setServiceDetailsInRedux(serviceDetails);
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
    dispatch(aiServiceDetailsActions.updateProgressStatus(sections.SETUP_DEMO, progressStatus.PENDING, serviceStatus));
  };

  const handleContinue = async () => {
    if (serviceDetails.assets.demoFiles.url || !demoComponentAvailable) {
      await handleSave();
      history.push(
        ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path
          .replace(":orgUuid", orgUuid)
          .replace(":serviceUuid", serviceUuid)
      );
      setInvalidFieldsFlag(false);
    } else {
      setInvalidFieldsFlag(true);
    }
  };

  const handleFinishLater = async () => {
    await handleSave();
    history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
  };

  return (
    <div>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="previous step" onClick={handleBack} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default Actions;
