import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../styles";

import SNETButton from "shared/dist/components/SNETButton";
import SNETTextarea from "shared/dist/components/SNETTextarea";

const MessageToReviewers = ({ classes }) => {
  return (
    <div className={classes.MessageToReviewersContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <div className={classes.messageReviewContainer}>
          <Typography variant="h6">Message to Reviewers</Typography>
          <SNETTextarea label="Text Input" rowCount={8} />
          <SNETButton color="primary" variant="outlined" children="send comment" />
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(MessageToReviewers);
