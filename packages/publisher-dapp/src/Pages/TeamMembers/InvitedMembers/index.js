import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShowMoreIcon from "@material-ui/icons/MoreVert";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const InvitedMembers = ({ classes, invitedPplCount }) => {
  return (
    <Grid container className={classes.invitedMembersContainer}>
      <Typography variant="h6">Invited People {invitedPplCount}</Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.column}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <span>email</span>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <span>invited on</span>
        </Grid>
      </Grid>
      <div className={classes.tableBody}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.data}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <span className={classes.mobileTableHeader}>email:</span>
            <span className={classes.tableBodyCell}>pauljones@email.com</span>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <span className={classes.mobileTableHeader}>invited on:</span>
            <span className={classes.tableBodyCell}>Dec 25,2019</span>
          </Grid>
          <ShowMoreIcon className={classes.showMoreIcon} />
        </Grid>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="invite members" variant="contained" color="primary" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(InvitedMembers);
