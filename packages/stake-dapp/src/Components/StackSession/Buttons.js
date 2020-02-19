import React from "react";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const StackSession = ({ details }) => {
  const classes = useStyles();

  if (details) {
    return (
      <div className={classes.btnContainer}>
        <SNETButton key={details.text} color={details.color} variant={details.variant} children={details.text} />
      </div>
    );
  }

  return null;
};

export default StackSession;
