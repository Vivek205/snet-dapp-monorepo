import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";

import BasicDetails from "./BasicDetails";
import CompanyAddress from "./CompanyAddress";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { OnboardingRoutes } from "../../OnboardingRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../Services/Redux/actionCreators";
import { OrganizationSetupRoutes } from "../../../OrganizationSetup/OrganizationSetupRouter/Routes";
import validator from "shared/dist/utils/validator";
import { orgOnboardingConstraints } from "./validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const Organization = props => {
  const classes = useStyles();
  const { history } = props;
  const [alert, setAlert] = useState({});
  const organization = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.TNC.path);
  };

  const handleFinish = async () => {
    setAlert({});
    try {
      const isNotValid = validator(organization, orgOnboardingConstraints);
      if (isNotValid) {
        throw new ValidationError(isNotValid[0]);
      }
      await dispatch(organizationActions.finishLater(organization));
      history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path);
    } catch (error) {
      if (error instanceof ValidationError) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
    }
  };

  return (
    <Fragment>
      <div className={classes.box}>
        <Typography variant="h6">Organization Verification Required</Typography>
        <Typography>
          You need to provide your company organization details and your DUNS number for the verification process.
        </Typography>
        <BasicDetails />
        <CompanyAddress />
        <AlertBox type={alert.type} message={alert.message} />
      </div>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" />
        <SNETButton color="primary" children="back" onClick={handleNavigateBack} />
        <SNETButton color="primary" variant="contained" children="finish" onClick={handleFinish} />
      </div>
    </Fragment>
  );
};

export default Organization;
