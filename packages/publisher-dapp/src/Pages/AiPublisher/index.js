import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import SNETButton from "shared/src/components/SNETButton";
import MainSection from "./MainSection";
import { useStyles } from "./styles";

const AiPublisher = ({ classes }) => {
  return (
  	<div className={classes.AiPublisherMainContainer}>
      <Grid container spacing={24} className={classes.topSectionCotainer}>
        <Grid item xs={12} sm={3} md={3} lg={3} className={classes.titleContainer}>
          <Typography variant="h3" className={classes.title}>My AI Apps</Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9} className={classes.descriptionContainer}>
          <Typography className={classes.descriptionTitle}>Welcome to the AI Publisher</Typography>
          <Typography className={classes.description}>With this pubilsher portal, you can publish and manage yourAI services. You will be able to edit your services, demos, and tutorial content.</Typography>
          <div className={classes.btnContainer}>
            <SNETButton color="primary" children="create new ai service" variant="contained" />
            <SNETButton color="primary" variant="text" children="edit company organization" />
          </div>          
        </Grid>
      </Grid>
      <MainSection />
  	</div>
  )
};
export default withStyles(useStyles)(AiPublisher);
