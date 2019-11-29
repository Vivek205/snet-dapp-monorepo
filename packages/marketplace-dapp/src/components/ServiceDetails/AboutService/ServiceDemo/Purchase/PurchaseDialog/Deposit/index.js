import React from "react";
import { withStyles } from "@material-ui/styles";
import StyledTextField from "shared/dist/components/StyledTextField";

import { useStyles } from "./styles";

const Deposit = ({ classes }) => {
  return <StyledTextField label="AGI Token Amount" />;
};

export default withStyles(useStyles)(Deposit);
