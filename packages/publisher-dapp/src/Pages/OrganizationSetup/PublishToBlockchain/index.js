import React, { Fragment, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import TechnicalInfo from "./TechnicalInfo";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";
import { useSelector, useDispatch } from "react-redux";
import SubmitAction from "./SubmitAction";
import validator from "shared/dist/utils/validator";
import { submitOrganizationCostraints } from "../validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import { organizationActions } from "../../../Services/Redux/actionCreators";

const PublishToBlockchain = ({ classes, handleFinishLater, history }) => {
  const organization = useSelector(state => state.organization);
  const { name, uuid, status, ownerFullName } = organization;
  const [alert, setAlert] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setAlert({});
    try {
      const isNotValid = validator(organization, submitOrganizationCostraints);
      if (isNotValid) {
        throw new ValidationError(isNotValid[0]);
      }
      dispatch(organizationActions.submitForApproval(uuid));
    } catch (error) {
      if (error instanceof ValidationError) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
      setAlert({ type: alertTypes.ERROR, message: "unable to submit. please try later" });
    }
  };

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
      <AlertBox message={alert.message} type={alert.type} />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
        <SNETButton color="primary" children="back" onClick={handleBack} />
        <SubmitAction status={status} handlePublish={handlePublish} handleSubmit={handleSubmit} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(PublishToBlockchain);
