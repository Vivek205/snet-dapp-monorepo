import React, { Fragment } from "react";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const Region = ({ history }) => {
  const classes = useStyles();

  const handleContinue = () => {
    history.push(OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN.path);
  };

  return (
    <Fragment>
      <span>Region / Group</span>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </Fragment>
  );
};

export default Region;
