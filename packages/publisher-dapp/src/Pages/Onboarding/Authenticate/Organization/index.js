import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import StyledTextField from "shared/dist/components/StyledTextField";

const Organization = () => {
  return (
    <Grid container>
      <Grid container>
        <Grid item sx={12} sm={12} md={6} lg={6} justify="flex-end">
          <StyledTextField />
        </Grid>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <Typography variant="body2">
            You will be able to choose publish and developed as Company Organization, Indivdual / Sole Proprietor /
            Single Person Business or join an existing approved entity with an invitation.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Organization;
