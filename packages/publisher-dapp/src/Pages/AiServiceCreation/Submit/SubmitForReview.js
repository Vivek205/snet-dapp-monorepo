import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import AlertBox from "shared/dist/components/AlertBox";
import { useStyles } from "./styles";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { initSDK } from "shared/dist/utils/snetSdk";
import SNETButton from "shared/dist/components/SNETButton";

const selectState = state => ({ serviceDetails: state.aiServiceDetails });

const SubmitForReview = ({ classes }) => {
  const [MMAddress, setMMAddress] = useState(undefined);
  const [disabledTextfield, setDisabledTextField] = useState(true);
  const { serviceDetails } = useSelector(selectState);
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();

  const handleConnectMM = async () => {
    const sdk = await initSDK();
    if (sdk.account.address) {
      setMMAddress(sdk.account.address);
      setDisabledTextField(false);
    }
  };

  const handleCommentChange = event => {
    dispatch(aiServiceDetailsActions.setServiceProviderComment(event.target.value));
  };

  const handleSubmitForReview = async () => {
    await dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails));
  };

  return (
    <Grid container className={classes.submitContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.submitDescription}>
            After you submitted your service, SNET admins will review your service protocals. This process could take a
            few days. After the review you will be notified if your service as has been ACCEPTED or if some your inputs
            needs to be refined. You will be able to review and respond to the feedback from the SNET Admins here.
          </Typography>
          <Typography className={classes.metamaskAddText}>
            The following Metamask address will be used for publishing the service.{" "}
          </Typography>
          <SNETTextfield
            name="Metamask Address"
            value={MMAddress}
            icon
            label="Metamask Address"
            disabled={disabledTextfield}
            description="Click on connect Metamask to capture the ethereum account address from your Metamask wallet"
          />
          <div className={classes.commentField}>
            <SNETTextarea
              label="Comments for Reviewers (optional)"
              minCount={0}
              maxCount={5000}
              rowCount={8}
              colCount={105}
              value={serviceDetails.comments.serviceProvider[0]}
              onChange={handleCommentChange}
            />
          </div>
          <AlertBox type={alert.type} message={alert.message} />
          <div className={classes.btnContainer}>
            <SNETButton children="connect metamask" color="primary" variant="contained" onClick={handleConnectMM} />
            <SNETButton
              children="submit for review"
              color="primary"
              variant="contained"
              onClick={handleSubmitForReview}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(SubmitForReview);
