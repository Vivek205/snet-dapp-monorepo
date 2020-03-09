import React from "react";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import Logo from "../../../assets/images/WhiteLogo.svg";

const FooterLogo = ({ classes }) => {
  return (
    <div className={classes.FooterLogo}>
      <h1>
        <a href="/" title="SingularityNET">
          <img src={Logo} alt="SingularityNET" />
        </a>
      </h1>
    </div>
  );
};

export default withStyles(useStyles)(FooterLogo);
