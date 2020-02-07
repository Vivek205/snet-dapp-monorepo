import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import AlertBox from "shared/dist/components/AlertBox";
import { initSDK } from "shared/dist/utils/snetSdk";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { useParams } from "react-router-dom";
import Actions from "./Actions";

const Submit = ({ classes }) => {
  const [alert] = useState({});
  const [MMAddress, setMMAddress] = useState(undefined);
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();
  const { organization, serviceDetails } = useSelector(state => ({
    organization: state.organization,
    serviceDetails: state.aiServiceDetails,
  }));

  const handleConnectMM = async () => {
    const sdk = await initSDK();
    if (sdk.account.address) {
      setMMAddress(sdk.account.address);
    }
  };

  const handleCommentChange = event => {
    dispatch(aiServiceDetailsActions.setServiceProviderComment(event.target.value));
  };

  const handleSubmitForReview = async () => {
    await dispatch(aiServiceDetailsActions.submitServiceDetailsForReview(orgUuid, serviceUuid, serviceDetails));
  };

  const handlePublishToBlockchain = async () => {
    const { metadata_ipfs_hash } = await dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid));
    await dispatch(
      aiServiceDetailsActions.publishToBlockchain(
        organization.id,
        serviceDetails.id,
        metadata_ipfs_hash,
        serviceDetails.tags
      )
    );
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
            label="Metamask Address disabled"
            disabled
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
          <Actions
            classes={classes}
            status={serviceDetails.serviceState.state}
            handleConnectMM={handleConnectMM}
            handleSubmitForReview={handleSubmitForReview}
            handlePublishToBlockchain={handlePublishToBlockchain}
          />
        </div>
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Submit);
