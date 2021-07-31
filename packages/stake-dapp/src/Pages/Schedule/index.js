import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
import ComputeMailsImage from "shared/dist/assets/images/ComputeMails.png";
import { useStyles } from "./styles";

const Schedule = ({ classes }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.signUpContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h2">Staking Notification</Typography>
        <Typography>Get notified by email when the next staking window is open - Don’t miss out!</Typography>
        <form
          action="https://singularitynet.us16.list-manage.com/subscribe/post?u=d74195510c25bf501caf3011d&id=a804df2efd"
          method="post"
          target="_blank"
          name="mc-embedded-subscribe-form"
          noValidate=""
        >
          <SNETTextfield name="EMAIL" label="email" />
          <SNETButton type="submit" children="subscribe" color="primary" variant="contained" />
        </form>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img src={ComputeMailsImage} alt="Computer And Mails" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Schedule);
