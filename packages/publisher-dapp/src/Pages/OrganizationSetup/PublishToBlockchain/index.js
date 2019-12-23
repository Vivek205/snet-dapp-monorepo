import React, { Fragment } from "react";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const PublishToBlockchain = ({ handleFinishLater, history }) => {
  const classes = useStyles();

  const handlePublish = () => {
    console.log("published to block chain");
  };

  const handleBack = () => {
    history.push(OrganizationSetupRoutes.REGION.path);
  };
  return (
    <Fragment>
      <span>publish to block chain</span>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="back" onClick={handleBack} />
        <SNETButton
          color="primary"
          variant="contained"
          children="publish company to blockchain"
          onClick={handlePublish}
        />
      </div>
    </Fragment>
  );
};

export default PublishToBlockchain;
