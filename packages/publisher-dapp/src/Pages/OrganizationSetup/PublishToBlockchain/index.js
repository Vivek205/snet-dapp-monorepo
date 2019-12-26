import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox from "shared/dist/components/AlertBox";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import TechnicalInfo from "./TechnicalInfo";
import Invite from "./Invite";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";
import { useSelector } from "react-redux";

const PublishToBlockchain = ({ classes, handleFinishLater, history }) => {
  const { name, ownerFullName } = useSelector(state => state.organization);

  const handlePublish = () => {
    console.log("published to block chain");
  };

  const handleBack = () => {
    history.push(OrganizationSetupRoutes.REGION.path);
  };
  return (
    <Fragment>
      <div className={classes.box}>
        <Typography variant="h6">Publish Organization to Blockchain</Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
          hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
        </Typography>
        <div className={classes.inputFields}>
          <SNETTextfield label="Entity Type" name="entitytype" disabled />
          <SNETTextfield
            label="Company Organization Name"
            description="The company name is displayed as the provider to users on the AI service page name.11111. "
            name="name"
            disabled
            value={name}
          />
          <SNETTextfield
            label="Owners Full Name"
            description="You should be owner of your company’s legal entity."
            name="ownerFullName"
            disabled
            value={ownerFullName}
          />
        </div>
        <TechnicalInfo />
      </div>
      <AlertBox
        message="Final launch will require you to be logged into your Metamask and some ETH gas cost to activate the service."
        type="warning"
      />
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

export default withStyles(useStyles)(PublishToBlockchain);
