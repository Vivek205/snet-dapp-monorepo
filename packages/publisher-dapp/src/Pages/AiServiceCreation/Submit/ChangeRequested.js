import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core";
import ParseHTML from "html-react-parser";

import { useStyles } from "./styles";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { organizationSetupStatuses } from "../../../Utils/organizationSetup";
import validator from "shared/dist/utils/validator";
import { submitServiceConstraints } from "./validationConstraints";
import { generateDetailedErrorMessageFromValidation } from "../../../Utils/validation";
import { checkIfKnownError } from "shared/dist/utils/error";
import { useDispatch } from "react-redux";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const ChangeRequested = ({
  classes,
  onContinueToEdit,
  changeServiceDetailsLeaf,
  comments,
  serviceDetails,
  orgUuid,
  orgStatus,
}) => {
  const [alert, setAlert] = useState({});
  const dispatch = useDispatch();

  const handleCommentChange = e => {
    const updatedComments = { ...comments, SERVICE_PROVIDER: e.target.value };
    changeServiceDetailsLeaf("comments", updatedComments);
  };

  const handleSubmitComment = async () => {
    try {
      setAlert({});
      if (orgStatus !== organizationSetupStatuses.PUBLISHED) {
        if (orgStatus === organizationSetupStatuses.PUBLISH_IN_PROGRESS) {
          return setAlert({
            type: alertTypes.ERROR,
            message:
              "Organization is being published in blockchain. Service can be submitted only when organization is published",
          });
        }
        return setAlert({
          type: alertTypes.ERROR,
          message: "Organization is not published. Please publish the organization before publishing the service",
        });
      }
      const isNotValid = validator(serviceDetails, submitServiceConstraints);
      if (isNotValid) {
        const errorMessage = generateDetailedErrorMessageFromValidation(isNotValid);
        return setAlert({ type: alertTypes.ERROR, children: errorMessage });
      }
      await dispatch(
        aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceDetails.uuid, serviceDetails)
      );
    } catch (e) {
      if (checkIfKnownError(e)) {
        return setAlert({ type: alertTypes.ERROR, message: e.message });
      }
      setAlert({ type: alertTypes.ERROR, message: "Something Went wrong. Please try later." });
    }
  };

  return (
    <div className={classes.launchServiceContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SingularityNet curation team will review your service. This process could
          take a few days. After the review you will be notified if your service as has been accepted or if additional
          information is required. You will be able to review and respond to the feedback from the team here.
        </Typography>
        <div className={classes.changesReqAlertContainer}>
          <AlertBox
            type={alertTypes.WARNING}
            header="Additional information required"
            icon={BlockIcon}
            message="We need additional details to process and approve your service.
             Please review the comments below and update your service. Once done, you can resubmit for approval."
          />
        </div>

        <div className={classes.changeReqTextarea}>
          <Typography variant="h6">Reviews Comment</Typography>
          <Typography>{ParseHTML(comments.SERVICE_APPROVER) || "No comments Provided"}</Typography>

          <Typography variant="h6">Message to Reviewers</Typography>
          <SNETTextarea
            label="Text Input"
            rowCount={8}
            value={comments.SERVICE_PROVIDER}
            onChange={handleCommentChange}
          />
        </div>

        <div className={classes.changesReqAlertContainer}>
          <AlertBox type={alert.type} children={alert.children} message={alert.message} />
        </div>

        <div className={classes.changeReqBtnContainer}>
          <SNETButton color="primary" variant="outlined" children="Reply" onClick={handleSubmitComment} />
          <SNETButton color="primary" variant="contained" children="Go back to edit" onClick={onContinueToEdit} />
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(ChangeRequested);
