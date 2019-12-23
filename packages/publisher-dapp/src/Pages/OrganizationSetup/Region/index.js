import React, { Fragment } from "react";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const Region = ({ history, handleFinishLater }) => {
  const classes = useStyles();

  const handleContinue = () => {
    history.push(OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN.path);
  };

  const handleBack = () => {
    history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path);
  };

  return (
    <Fragment>
      <span>Region / Group</span>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="back" onClick={handleBack} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </Fragment>
  );
};

export default Region;
