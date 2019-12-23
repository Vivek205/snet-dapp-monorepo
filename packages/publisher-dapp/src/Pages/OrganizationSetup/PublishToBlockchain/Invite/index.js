import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


import { useStyles } from "./styles";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const Invite = () => {
  const classes = useStyles();
  return (
    <div className={classes.inviteContainer}>
      <Typography variant="subtitle1">Team Members Accepted Invite</Typography>
      <Typography variant="subtitle2">People you invited and that have accepted will be published to your company’s blockchain.  Any invitations that are currently pending can be added to blockchain by you (the owner) afterwards.</Typography>
      <Grid container className={classes.table}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableColumn}>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>email</Typography></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>name</Typography></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>status</Typography></Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData}>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>johndoe@email.com</Typography></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>John Doe</Typography></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}><Typography>Invitation Accepted</Typography></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Invite;
