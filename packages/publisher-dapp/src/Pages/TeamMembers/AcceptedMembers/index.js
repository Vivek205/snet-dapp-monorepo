import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShowMoreIcon from "@material-ui/icons/MoreVert";

import UserCard from "shared/dist/components/UserCard";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const AcceptedMembers = ({ classes, acceptedPplCount, userImg }) => {
  return (
    <Grid container className={classes.acceptedMembersContainer}>
      <Typography variant="h6">Accepted Invitations {acceptedPplCount}</Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.column}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <span>joining member</span>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <span>role</span>
        </Grid>
      </Grid>
      <div className={classes.tableBody}>
        <Grid item sx={12} sm={12} md={12} lg={12} className={classes.data}>
          <Grid item sx={12} sm={12} md={6} lg={6}>
            <span className={classes.mobileTableHeader}>joining member:</span>
            <UserCard userName="Paul Johas" userEmail="pauljones@email.com" />
          </Grid>
          <Grid item sx={12} sm={12} md={6} lg={6}>
            <span className={classes.mobileTableHeader}>role:</span>
            <span className={classes.tableBodyCell}>Editor</span>
          </Grid>
          <ShowMoreIcon className={classes.showMoreIcon} />
        </Grid>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="add to blockchain" variant="contained" color="primary" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(AcceptedMembers);
