import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import BasicDetails from "./BasicDetails";
import CompanyAddress from "./CompanyAddress";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { OnboardingRoutes } from "../../OnboardingRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../Services/Redux/actionCreators";
import { OrganizationSetupRoutes } from "../../../OrganizationSetup/OrganizationSetupRouter/Routes";

const Organization = props => {
  const classes = useStyles();
  const { history } = props;

  const organization = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.TNC.path);
  };

  const handleFinish = async () => {
    await dispatch(organizationActions.finishLater(organization));
    history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path);
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
