import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import CheckIcon from "@material-ui/icons/CheckCircle";

import SNETButton from "shared/dist/components/SNETButton";

import benefitsImage from "shared/dist/assets/images/benefits.png";
import { useStyles } from "./styles";

const Benefits = ({ classes }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.benefitsContainer}>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.benefitsMedia}>
          <img src={benefitsImage} alt="Benefits" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.benefitsContent}>
          <Typography variant="h2">Benefits of Staking AGI tokens</Typography>
          <ul>
            <li>
              <CheckIcon />
              <div>
                <Typography>Feature Benefit 1: </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, mea eu stet repudiare, est no vidit paulo, ius adhuc cetero phaedrum eu.
                  Vix commodo aliquam detracto in, solum tibique vis cu.
                </Typography>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <Typography>Feature Benefit 2: </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, mea eu stet repudiare, est no vidit paulo, ius adhuc cetero phaedrum eu.
                  Vix commodo aliquam detracto in, solum tibique vis cu.
                </Typography>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <Typography>Feature Benefit 3: </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, mea eu stet repudiare, est no vidit paulo, ius adhuc cetero phaedrum eu.
                  Vix commodo aliquam detracto in, solum tibique vis cu.
                </Typography>
              </div>
            </li>
          </ul>
          <SNETButton children="learn more" variant="outlined" color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Benefits);
