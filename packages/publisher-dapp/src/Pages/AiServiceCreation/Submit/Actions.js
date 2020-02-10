import React from "react";
import { serviceCreationStatus } from "../constant";

import SNETButton from "shared/dist/components/SNETButton";

const Actions = ({ classes, status, handleConnectMM, handleSubmitForReview, handlePublishToBlockchain }) => {
  if (status === serviceCreationStatus.APPROVED) {
    return (
      <div className={classes.btnContainer}>
        <SNETButton children="connect metamask" color="primary" variant="contained" onClick={handleConnectMM} />
        <SNETButton
          children="publish to blockchain"
          color="primary"
          variant="contained"
          onClick={handlePublishToBlockchain}
        />
      </div>
    );
  }
  return (
    <div className={classes.btnContainer}>
      <SNETButton children="connect metamask" color="primary" variant="contained" onClick={handleConnectMM} />
      <SNETButton children="submit for review" color="primary" variant="contained" onClick={handleSubmitForReview} />
    </div>
  );
};

export default Actions;
