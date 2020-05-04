import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const LoggedOutActions = ({ classes }) => {
  const history = useHistory();

  return (
    <div className={classes.logOutActionContainer}>
      <Typography onClick={() => history.push(GlobalRoutes.LOGIN.path)} className={classes.loginBtn}>
        Login{" "}
      </Typography>
      <Typography onClick={() => history.push(GlobalRoutes.SIGNUP.path)} className={classes.signupBtn}>
        Sign up free
      </Typography>
    </div>
  );
};

export default withStyles(useStyles)(LoggedOutActions);
