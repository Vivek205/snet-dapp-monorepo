import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SNETButton from "shared/dist/components/SNETButton";
import ServiceImage from "shared/dist/assets/images/services.png";

import CreateNewServicePopup from "./CreateNewServicePopup";
import ServiceCollection from "./ServiceCollection";
import { useStyles } from "./styles";

const AiServices = ({ classes }) => {
  const [showPopUp, setshowPopUp] = useState(false);

  const handleCreateService = () => {
    setshowPopUp(true);
  };

  const handleClosePopup = () => {
    setshowPopUp(false);
  };

  return (
    <div className={classes.AiServicesMainContainer}>
      <Grid container spacing={24} className={classes.topSectionCotainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.descriptionContainer}>
          <Grid item xs={12} sm={7} md={7} lg={7} className={classes.content}>
            <div>
              <Typography variant="h3" className={classes.descriptionTitle}>
                My AI Apps
              </Typography>
              <Typography variant="h5" className={classes.description}>
                With this pubilsher portal, you can publish and manage yourAI services. You will be able to edit your
                services, demos, and tutorial content.
              </Typography>
            </div>
            <div className={classes.btnContainer}>
              <SNETButton
                color="primary"
                children="create new ai service"
                variant="contained"
                onClick={handleCreateService}
                // check
              />
              <SNETButton color="primary" variant="text" children="view documentation" />
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5} className={classes.media}>
            <img src={ServiceImage} alt="Services" />
          </Grid>
        </Grid>
        <ServiceCollection />
      </Grid>
      <CreateNewServicePopup open={showPopUp} handleClose={handleClosePopup} />
    </div>
  );
};
export default withStyles(useStyles)(AiServices);
