import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import DummyCardImg from "shared/dist/assets/images/dummy-card.png";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import UserCard from "shared/dist/components/UserCard";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Profile = ({ classes, location }) => {
  return (
    <Grid container className={classes.profileContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">AI Service Profile Information</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter
            videbatur hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
          </Typography>

          <SNETTextfield
            icon
            label="AI Service Name"
            minCount={0}
            maxCount={50}
            description="The name of your service can not be same name as another service."
          />
          <div className={classes.publishingCompanyContainer}>
            <SNETTextfield icon label="Publishing Company" />
            <UserCard userName="PROVIDER" userEmail="SINGULARITYNET" />
          </div>

          <SNETTextarea
            showInfoIcon
            label="Short Description"
            minCount={0}
            maxCount={160}
            rowCount={3}
            colCount={105}
          />
          <SNETTextarea
            showInfoIcon
            label="Dark Description"
            minCount={0}
            maxCount={5000}
            rowCount={8}
            colCount={105}
          />
          <SNETTextfield
            icon
            label="Input Tags"
            extraInfo="Insert multiple items separted with commas. press hit enter"
          />
          <SNETTextarea
            showInfoIcon
            label="Added Tags"
            rowCount={4}
            colCount={105}
            extraInfo="You can add up to 20 tag items"
          />
          <SNETTextfield
            label="Project URL"
            description="The Website URL will be displayed to users under your AI service page. Recommend Github links"
          />
          <SNETTextfield label="Contributors" minCount={0} maxCount={100} />

          <div className={classes.profileImgContainer}>
            <Typography variant="subtitle1">AI Service Profile Image</Typography>
            <div className={classes.uploaderContentConatiner}>
              <div className={classes.imgUploader}>
                <SNETImageUpload />
              </div>
              <div className={classes.profileImgContent}>
                <Typography>
                  Every AI service will have has a profile image. We recommend an image that is 906 x 504 in size. You
                  can preview how it will look on the AI Marketpalce.
                </Typography>
                <Typography>
                  We encourage to find a representative image for your service to attract users explore your page and
                  service.
                </Typography>
              </div>
            </div>
            <div className={classes.images}>
              <div className={classes.largeImg}>
                <img src={DummyCardImg} alt="Large Size Image" />
                <Typography className={classes.imgDimensionDetails}>302 x 168 | 32-bit PNG or JPG </Typography>
              </div>
              <div className={classes.smallerImg}>
                <img src={DummyCardImg} alt="Small Size Image" />
                <Typography className={classes.imgDimensionDetails}>207 x 115 | 32-bit PNG or JPG </Typography>
              </div>
            </div>
          </div>

          <div className={classes.galleryContainer}>
            <Typography variant="subtitle1">Gallery Images</Typography>
            <div className={classes.imgUploader} />
            <div className={classes.galleryImgContent}>
              <Typography>
                You will be able to support a gallery of images on your AI service profile page. You can have up to 10
                images that display various examples, outputs or aspects of your service that you would like to
                highlight.
              </Typography>
            </div>
          </div>
        </div>
      </Grid>

      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="finish later" color="primary" variant="text" />
        <SNETButton children="preview" color="primary" variant="contained" />
        <SNETButton children="continue" color="primary" variant="contained" />
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Profile);
