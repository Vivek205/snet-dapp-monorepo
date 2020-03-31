import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";

const MmAuthorization = ({ classes, handleAuthorizeMM }) => {
  return (
    <Grid container className={classes.walletAccContainer}>
      <Grid item xs={12} sm={12} md={2} lg={2}>
        <Typography>
          <SNETButton color="primary" variant="contained" children="Claim channel" onClick={handleAuthorizeMM} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(MmAuthorization);
