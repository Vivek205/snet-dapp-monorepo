import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

const OrgImg = ({ classes }) => {
  const { raw, fileType } = useSelector(state => state.organization.assets.heroImage);

  
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.orgImgContainer}>
      <Typography className={classes.title}>Organisation Profile Image</Typography>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.profileImgContainer}>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.orgProfileImg}>
          <SNETImageUpload />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.previewContainer}>
          <Typography className={classes.previewText}>
            Every organization will have has a profile image. We recommend an image that is 906 x 504 in size. You can
            preview how it will look on the AI Marketpalce.
          </Typography>
          <div className={classes.previewImg}>
            <div className={classes.previewLargeImg}>
              <Typography>Preview</Typography>
              <Avatar alt="Singularity" src="http://placehold.it/90x90" className={classes.largePreviewImg} />
            </div>
            <div className={classes.previewSmallImg}>
              <Avatar alt="Singularity" src="http://placehold.it/40x40" className={classes.smallPreviewImg} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(OrgImg);
