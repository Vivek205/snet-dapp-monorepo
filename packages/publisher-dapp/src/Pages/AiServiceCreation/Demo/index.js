import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

import SNETButton from "shared/dist/components/SNETButton";
import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import AlertBox from "shared/dist/components/AlertBox";

import { useStyles } from "./styles";

const Demo = ({ classes }) => {
  const [uploadSucces, alert] = useState(false);
  return (
    <Grid container className={classes.demoContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Demo Setup</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.demoPageDescription}>
            AI publishers can create a unique demo experience that users on the AI Marketpalce can engage with. A
            positive demo experience will users engage and integrate your AI into their applications. We encourage to
            follow our best pratices on how to properly setup your demo on our AI Marketplace. The steps for creating a
            demo UI involves
          </Typography>

          <div className={classes.stepOneContainer}>
            <Typography variant="subtitle1" className={classes.stepsHeading}>
              Step 1: Download Demo UI Package
            </Typography>
            <Typography variant="subtitle2">
              Using our starter node demo UI pacake will help you to set up a local development and testing environment.
              Download the package from the following link and follow the instructions to set up a local working
              environment. Click here to see the contents of the package.
            </Typography>
            <div className={classes.downloadBtn}>
              <SNETButton children="download demo ui package v1.03" color="primary" variant="contained" />
            </div>
            <hr />
          </div>

          <div className={classes.stepTwoContainer}>
            <Typography variant="subtitle1" className={classes.stepsHeading}>
              Step 2: Set Up Local Test Environment
            </Typography>
            <Typography variant="subtitle2">
              Once you download the package extract the components, check for the prerequisite. Lorem ipsum dolor sit
              amet, clita dicant postulant ne duo, adipisci expetenda has eu. Minimum deseruisse sea et, eu alterum
              legimus nam. Cum ex purto feugiat verterem, euismod voluptatibus qui in.{" "}
            </Typography>
            <ul>
              <li>
                <Typography variant="subtitle2">
                  <span>1. Step Name: </span>Lorem ipsum dolor sit amet, ea mea iudico fabulas, periculis repudiandae
                  sit at. Duo ne diam dicit quodsi. Cu mutat option per. Sea noluisse honestatis ne, an pri quidam
                  suscipit
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>2. Step Name: </span>Veri aliquid nam id, eu ius vivendo appetere periculis, veniam legimus ei
                  usu. Movet quaerendum mei et. Pro ex lorem iriure noluisse. Audire admodum eum cu, vero commune cu
                  usu. Vivendo suscipiantur ad his, per at aliquip nominavi deseruisse, at sed decore phaedrum.
                </Typography>
              </li>
              <li>
                <Typography variant="subtitle2">
                  <span>3. Step Name: </span>Veri aliquid nam id, eu ius vivendo appetere periculis, veniam legimus ei
                  usu. Movet quaerendum mei et. Pro ex lorem iriure noluisse. Audire admodum eum cu, vero commune cu
                  usu. Vivendo suscipiantur ad his, per at aliquip nominavi deseruisse, at sed decore phaedrum.
                </Typography>
              </li>
            </ul>
            <div className={classes.stepTwoBtnsContaier}>
              <Typography variant="subtitle2">Getting stuck or have questions?</Typography>
              <SNETButton children="setup docs" color="primary" variant="text" />
              <SNETButton children="f.a.q" color="primary" variant="text" />
              <SNETButton children="contact us" color="primary" variant="text" />
            </div>
            <hr />
          </div>

          <div className={classes.stepThreeContainer}>
            <Typography variant="subtitle1" className={classes.stepsHeading}>
              Step 3: Upload the Demo Files
            </Typography>
            <Typography variant="subtitle2">
              Zip / Rar / compress all the project files and drop it here. Lorem ipsum dolor sit amet, eu nec aliquam
              volutpat partiendo, id idque mentitum assentior vis, nam no tamquam principes gloriatur. Omnes intellegam
              suscipiantur eu usu, vel tota senserit prodesset in. Nostrum probatus singulis id nec, virtute docendi
              mnesarchum pri ea, eirmod maiorum scripserit quo ei.{" "}
            </Typography>
            <div className={classes.imgUploaderContainer}>
              <SNETImageUpload />
              <div className={classes.uploadDetails}>
                <div className={uploadSucces ? classes.successfullUpload : classes.uploadStatusContainer}>
                  <FolderIcon />
                  <Typography className={uploadSucces ? classes.uploaded : classes.uploadStatus}>
                    {uploadSucces ? "Files Uploaded Successfully" : "No Files Uploaded"}
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.title}>File Name:</Typography>
                  <Typography className={classes.value} />
                </div>
                <div>
                  <Typography className={classes.title}>Items:</Typography>
                  <Typography className={classes.value} />
                </div>
                <div>
                  <Typography className={classes.title}>Uploaded:</Typography>
                  <Typography className={classes.value} />
                </div>
                <div>
                  <Typography className={classes.title}>Size:</Typography>
                  <Typography className={classes.value} />
                </div>
                <div>
                  <Typography className={classes.title}>User:</Typography>
                  <Typography className={classes.value} />
                </div>
                <div className={classes.uploadBtns}>
                  <SNETButton children="download files" color="primary" variant="text" />
                  <SNETButton children="delete files" color="red" variant="text" />
                </div>
              </div>
            </div>
          </div>

          <AlertBox type={alert.type} message={alert.message} />
        </div>
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Demo);
