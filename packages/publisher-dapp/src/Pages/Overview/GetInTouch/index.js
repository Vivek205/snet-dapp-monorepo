import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { getInTouch } from "../content";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { useStyles } from "./styles";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";

const GetInTouch = ({ classes }) => {
  return (
    <Grid container className={classes.getInTouchContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.getInTouch}>
        <Typography variant="h2">{getInTouch.title}</Typography>
        <Typography variant="body2">{getInTouch.description}</Typography>
        <form>
          <SNETTextfield name="email" label="email" />
          <Link to={GlobalRoutes.ENROLL.path}>
            <SNETButton children="get in touch" color="primary" variant="contained" />
          </Link>
        </form>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(GetInTouch);
