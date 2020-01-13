import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import Typography from "@material-ui/core/Typography";

import InvitedAcceptedList from "./InvitedAcceptedList";
import AccessedTeamMembers from "./AccessedTeamMembers";
import { TopSectionContent } from "./content";

import { useStyles } from "./styles";

const TeamMembers = ({ classes }) => {
  return (
    <Grid container className={classes.teammembersContainer}>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.backToHomeLink}>
        <BackIcon />
        <Link to="/">Back to Home </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <div className={classes.topSection}>
          <div className={classes.topSectionContent}>
            <Typography variant="h3">{TopSectionContent.title}</Typography>
            <Typography variant="h5">{TopSectionContent.description}</Typography>
          </div>
          <div className={classes.topSectionMedia}>
            <img src={TopSectionContent.media} alt="Team Members" />
          </div>
        </div>
        <div className={classes.invitedAndAcceptedList}>
          <InvitedAcceptedList invitedPplCount="(4)" />
          <InvitedAcceptedList acceptedPplCount="(5)" acceptedMember />
        </div>
        <AccessedTeamMembers />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(TeamMembers);
