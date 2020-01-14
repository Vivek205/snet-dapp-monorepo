import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShowMoreIcon from "@material-ui/icons/MoreVert";

import { invitedMembersData } from "../content.js";
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
        {invitedMembersData.length === 0 ? (
          <span className={classes.message}>No pending invitations</span>
        ) : (
          invitedMembersData.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.data} key={item.email}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <span className={classes.mobileTableHeader}>email</span>
                <span className={classes.tableBodyCell}>{item.email}</span>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <span className={classes.mobileTableHeader}>invited on</span>
                <span className={classes.tableBodyCell}>{item.invitedOn}</span>
              </Grid>
              <ShowMoreIcon className={classes.showMoreIcon} />
            </Grid>
          ))
        )}
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="invite members" variant="contained" color="primary" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(InvitedMembers);
