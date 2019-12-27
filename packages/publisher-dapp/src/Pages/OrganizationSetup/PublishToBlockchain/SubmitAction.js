import React from "react";
import SNETButton from "shared/dist/components/SNETButton";
import { organizationSetupStatuses } from "../../../Utils/organizationSetup";

const SubmitAction = ({ status, handlePublish, handleSubmit }) => {
  if (status === organizationSetupStatuses.BLOCKCHAIN_SUBMITTED) {
    return (
      <SNETButton
        color="primary"
        variant="contained"
        children="publish company to blockchain"
        onClick={handlePublish}
      />
    );
  }
  return (
    <SNETButton color="primary" variant="contained" children="Submit changes for approval" onClick={handleSubmit} />
  );
};

export default SubmitAction;
