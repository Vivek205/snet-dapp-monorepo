import React from "react";
import SNETButton from "shared/dist/components/SNETButton";

const SubmitAction = ({ handlePublish }) => {
  return <SNETButton color="primary" variant="contained" children="Publish to blockchain" onClick={handlePublish} />;
};

export default SubmitAction;
