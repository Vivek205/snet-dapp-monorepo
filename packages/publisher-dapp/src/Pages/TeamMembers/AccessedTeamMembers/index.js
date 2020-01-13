import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShowMoreIcon from "@material-ui/icons/MoreVert";
import InfoIcon from "@material-ui/icons/Info";

import UserCard from "shared/dist/components/UserCard";
import { useStyles } from "./styles";

const AccessedTeamMembers = ({ classes }) => {
  return (
    <Grid container className={classes.accessedTeamMembersContainer}>
      <Typography variant="h6">Team Members With Access</Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableHead}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <span>member</span>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <span>role</span>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <span>joined since</span>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableBody}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <span className={classes.mobileTableHeader}>member</span>
          <UserCard userName="Sujith Varma" userEmail="sujith.varma@singularitynet.io" />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <span className={classes.mobileTableHeader}>role</span>
          <div className={classes.infoIconContainer}>
            <InfoIcon className={classes.infoIcon} />
            <span className={classes.tableBodyCell}>Owner</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <span className={classes.mobileTableHeader}>joined since</span>
          <span className={classes.tableBodyCell}>Nov 14, 2019</span>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} className={classes.iconContainer}>
          <ShowMoreIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(AccessedTeamMembers);
