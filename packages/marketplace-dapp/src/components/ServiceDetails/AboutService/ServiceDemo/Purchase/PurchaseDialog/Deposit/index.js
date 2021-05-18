import React from "react";
import { withStyles } from "@material-ui/styles";
import StyledTextField from "shared/dist/components/StyledTextField";

import { useStyles } from "./styles";

const Deposit = () => {
  return <StyledTextField label="AGIX Token Amount" />;
};

export default withStyles(useStyles)(Deposit);
