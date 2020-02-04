import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const UploadFile = ({ classes }) => {
  const [uploadSucces] = useState(false);
  return (
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
  );
};

export default withStyles(useStyles)(UploadFile);
