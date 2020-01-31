import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";

import { useStyles } from "./styles";

const Profile = ({ classes, location }) => {
  return (
    <Grid container className={classes.profileContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">AI Service Profile Information</Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
          hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
        </Typography>
        <SNETTextfield
          name="AI Service Name"
          value="AI Service Name"
          icon
          description="The name of your service can not be same name as another servcie."
        />
      </Grid>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="finish later" color="primary" variant="text" />
        <SNETButton children="preview" color="primary" variant="contained" />
        <SNETButton children="continue" color="primary" variant="contained" />
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Profile);
