import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import { loggedInDetails, loggedOutDetails } from "./content";
import SNETButton from "shared/src/components/SNETButton";
import { useSelector } from "react-redux";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import SingularityLogo from "shared/src/assets/images/avatar.png";

const LoginBanner = ({ classes, providerName, emailId, orgImg }) => {
  const { isLoggedIn } = useSelector(state => state.user);

  if(isLoggedIn){
    return (
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Sign in as</Typography>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.signInContent}>
          <Grid item sx={12} sm={4} md={4} lg={4} className={classes.signInMedia}>
            <Avatar alt="Singularity" src={orgImg || SingularityLogo} className={classes.avatar} />
            <div className={classes.userDetails}>
              <Typography variant="h6">{providerName}</Typography>
              <Typography variant="subtitle2">{emailId}</Typography>
            </div>
          </Grid>
          <Grid item sx={12} sm={8} md={8} lg={8} className={classes.signInRightContent}>
            <Typography className={classes.signInSubtitle}>{loggedInDetails.subtitle}</Typography>
            <Typography className={classes.signInDescription}>{loggedInDetails.description}</Typography>
            <div className={classes.signInBtns}>
              <Link to={GlobalRoutes.LOGIN.path}>
                <SNETButton
                  color="primary"
                  children="Login to Another account"
                  variant="text"
                />
              </Link>
              <Link to={GlobalRoutes.SIGNUP.path}>
                <SNETButton color="primary" children="Create new account" variant="text" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
      <Typography variant="h6">Sign in</Typography>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.signInContent}>
        <Grid item sx={12} sm={4} md={4} lg={4} className={classes.signInMedia}>
          <img src="http://placehold.it/250x150" alt="Login In" />
        </Grid>
        <Grid item sx={12} sm={8} md={8} lg={8} className={classes.signInRightContent}>
          <Typography className={classes.signInSubtitle}>{loggedOutDetails.subtitle}</Typography>
          <Typography className={classes.signInDescription}>{loggedOutDetails.description}</Typography>
          <div className={classes.signInBtns}>
            <Link to={GlobalRoutes.LOGIN.path}>
              <SNETButton
                color="primary"
                children="Login to singularitynet"
                variant="text"
              />
            </Link>
            <Link to={GlobalRoutes.SIGNUP.path}>
              <SNETButton color="primary" children="Create new account" variant="text" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginBanner;
