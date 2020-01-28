import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import VerticalTabs from "./VerticalTabs";
import SNETButton from "shared/dist/components/SNETButton";
import ServiceImage from "shared/dist/assets/images/services.png";
import MainSection from "./MainSection";
import { upperTabs, lowerTabs } from "./content";
import { useStyles } from "./styles";

const AiPublisher = ({ classes }) => {
  return (
    <div className={classes.AiPublisherMainContainer}>
      <Grid container spacing={24} className={classes.topSectionCotainer}>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.verticalTabsContainer}>
          <VerticalTabs upperTabs={upperTabs} lowerTabs={lowerTabs} />
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} className={classes.rightSection}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.descriptionContainer}>
            <Grid item xs={12} sm={7} md={7} lg={7} className={classes.content}>
              <div>
                <Typography className={classes.descriptionTitle}>My AI Apps</Typography>
                <Typography className={classes.description}>
                  With this pubilsher portal, you can publish and manage yourAI services. You will be able to edit your
                  services, demos, and tutorial content.
                </Typography>
              </div>
              <div className={classes.btnContainer}>
                <SNETButton color="primary" children="create new ai service" variant="contained" />
                <SNETButton color="primary" variant="text" children="view documentation" />
              </div>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} className={classes.media}>
              <img src={ServiceImage} title="Services" />
            </Grid>
          </Grid>
          <MainSection />
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(useStyles)(AiPublisher);
