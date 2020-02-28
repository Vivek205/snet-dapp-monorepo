import React from "react";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Button = ({ details }) => {
  const classes = useStyles();

  if (details) {
    return (
      <div className={classes.btnContainer}>
        {details.map(button => (
          <SNETButton key={button.text} color={button.color} variant={button.variant} children={button.text} />
        ))}
      </div>
    );
  }

  return null;
};

export default Button;
