import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";
import Settings from "./Settings";
import { useSelector } from "react-redux";

const Region = ({ history, classes, handleFinishLater }) => {
  const { groups } = useSelector(state => state.organization);

  const handleContinue = () => {
    history.push(OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN.path);
  };

  const handleBack = () => {
    history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path);
  };

  return (
    <Fragment>
      <div className={classes.box}>
        <Typography variant="h6">Region Groups Configuration</Typography>
        <Typography variant="subtitle2">
          Every AI service your company publishes can be optimized for users based in various regions and groups. You
          will be able to configure this during the AI service level.
        </Typography>
        {groups.map((group, index) => (
          <Settings groups={groups} groupIndex={index} group={group} key={group.id} />
        ))}
      </div>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="back" onClick={handleBack} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(Region);
