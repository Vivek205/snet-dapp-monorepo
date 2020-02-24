import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import SNETButton from "shared/dist/components/SNETButton";

import BankImage from "shared/dist/assets/images/bank.png";
import PiggyBankImage from "shared/dist/assets/images/piggyBank.png";
import CalculatorImage from "shared/dist/assets/images/calculator.png";
import Banner from "./Banner";
import Benefits from "./Benefits";
import { useStyles } from "./styles";

const HowItWorks = ({ classes }) => {
  return (
    <Grid container className={classes.howItWorksContainer}>
      <Banner />
      <Benefits />
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.signUpContainer}>
        <Typography>Sign up for Staking Notifications</Typography>
        <form>
          <input type="text" />
          <SNETButton children="subscribe" color="primary" variant="contained" />
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.howItWorksSection}>
        <Typography variant="h2">How It Works</Typography>
        <Typography className={classes.howItWorksDesc}>
          Lorem ipsum dolor sit amet, mei te indoctum convenire. Sumo urbanitas moderatius eam ut, pro ex prima harum ri
          de ns. Vis obli que nusquam te, cum ex minim molestie. Eam ex modus luptatum adipiscing, pri id patrioque
          instructior, mel id tale definitionem.
        </Typography>
        <SNETButton children="start staking tokens" color="primary" variant="contained" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.titlesContainer}>
        <ul>
          <li>
            <img src={BankImage} alt="Bank" />
            <Typography variant="h4">Title One</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, odio dolorem sit in, his elit inermis cu. Id melius officiis mea. Ei sint
              veniam vis, duo te melius consulatu.
            </Typography>
          </li>
          <li>
            <img src={PiggyBankImage} alt="Piggy Bank" />
            <Typography variant="h4">Title Two</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, odio dolorem sit in, his elit inermis cu. Id melius officiis mea. Ei sint
              veniam vis, duo te melius consulatu.
            </Typography>
          </li>
          <li>
            <img src={CalculatorImage} alt="Calculator" />
            <Typography variant="h4">Title Three</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, odio dolorem sit in, his elit inermis cu. Id melius officiis mea. Ei sint
              veniam vis, duo te melius consulatu.
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(HowItWorks);
