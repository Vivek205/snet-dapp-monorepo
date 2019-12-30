import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import SNETButton from "shared/src/components/SNETButton";
import { useSelector } from "react-redux";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

const LoginBanner = ({ classes }) => {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
      <Typography variant="h5">Sign In</Typography>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.signInContent}>
        <Grid item sx={12} sm={4} md={4} lg={4} className={classes.signInMedia}>
          <img src="http://placehold.it/150x150" alt="Sign In" />
        </Grid>
        <Grid item sx={12} sm={8} md={8} lg={8} className={classes.signInRightContent}>
          <Typography className={classes.signInSubtitle}>
            Please Login or Signup into Singularitynet to use the portal.
          </Typography>
          <Typography className={classes.signInDescription}>
            To use the portal, please sign up. Lorem ipsum dolor sit amet, per odio adipi scing ea, est an purto libris
            fastidii, dolor laboramus consectetuer ut eum. An debet expetendis scriptorem ius. Dolorem detracto
            accusamus mea cu. Nam hendrerit theophrastus ex, vix aeque solet cu.
          </Typography>
          <div className={classes.signInBtns}>
            <Link to={GlobalRoutes.LOGIN.path}>
              <SNETButton
                color="primary"
                children={isLoggedIn ? "Login to Another account" : "Login to singularitynet"}
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
