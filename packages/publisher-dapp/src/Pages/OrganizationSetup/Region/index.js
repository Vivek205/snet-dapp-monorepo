import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import StyledButton from "shared/dist/components/StyledButton";
import { useStyles } from "./styles";

const Region = ({ classes }) => {
  return (
    <span>Region / Group</span>
  )
};

export default withStyles(useStyles)(Region);
