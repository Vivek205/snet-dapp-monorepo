import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { serviceCreationStatus } from "../constant";
import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";

const selectState = state => ({
  organization: state.organization,
  serviceDetails: state.aiServiceDetails,
});

const LaunchService = () => {
  const { organization, serviceDetails } = useSelector(selectState);
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();

  const handlePublishToBlockchain = async () => {
    const { metadata_ipfs_hash } = await dispatch(aiServiceDetailsActions.publishToIPFS(orgUuid, serviceUuid));
    await dispatch(
      aiServiceDetailsActions.publishToBlockchain(organization, serviceDetails, metadata_ipfs_hash, serviceDetails.tags)
    );
  };

  return (
    <SNETButton
      color="primary"
      variant="contained"
      disabled={serviceDetails.serviceState.state === serviceCreationStatus.APPROVAL_PENDING}
      onClick={handlePublishToBlockchain}
    >
      Continue to launch
    </SNETButton>
  );
};

export default withStyles(useStyles)(LaunchService);
