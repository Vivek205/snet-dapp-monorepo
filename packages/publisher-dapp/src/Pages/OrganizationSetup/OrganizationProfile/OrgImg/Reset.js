import React from "react";
import SNETButton from "shared/dist/components/SNETButton";

const Reset = ({ onReset }) => {
  return <SNETButton children="reset" onClick={onReset} color="secondary" variant="contained" />;
};

export default Reset;
