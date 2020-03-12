import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import SingularityLogo from "shared/dist/assets/images/avatar.png";

import { useStyles } from "./styles";

const UserCard = ({ classes, userImg, userName, userEmail }) => {
  return (
    <Grid item sx={12} sm={12} md={12} lg={12} className={classes.userCardContainer}>
      <Grid item sx={12} sm={12} md={6} lg={6} className={classes.userDetails}>
        <Avatar alt="Singularity" src={userImg || SingularityLogo} className={classes.avatar} />
        <div>
          <Typography className={classes.userName}>{userName}</Typography>
          <Typography className={classes.userEmail}>{userEmail}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(UserCard);
