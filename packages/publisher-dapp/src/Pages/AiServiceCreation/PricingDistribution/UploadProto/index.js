import React, { Fragment, useCallback, useState } from "react";
import Typography from "@material-ui/core/Typography";
import isEmpty from "lodash/isEmpty";

import { useStyles } from "./styles";
import SNETFileUpload from "shared/dist/components/SNETFileUpload";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const UploadProto = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "", size: "", type: "" });

  const handleDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setAlert({});
    if (!isEmpty(rejectedFiles)) {
      return setAlert({ type: alertTypes.ERROR, message: "File rejected please check the maxSize and type of file" });
    }
    if (!isEmpty(acceptedFiles)) {
      const { name, size, type } = acceptedFiles[0];
      setSelectedFile({ name, size, type });
      return setAlert({ type: alertTypes.SUCCESS, message: "File accepted" });
    }
  }, []);

  const acceptedFileTypes = "image/png";

  return (
    <Fragment>
      <Typography variant="subtitle1">Upload the Proto files</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
        hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
      </Typography>
      <SNETFileUpload
        onDrop={handleDrop}
        accept={acceptedFileTypes}
        multiple={false}
        showFileDetails
        fileName={selectedFile.name}
        fileSize={selectedFile.size}
      />
      <AlertBox type={alert.type} message={alert.message} />
    </Fragment>
  );
};

export default UploadProto;
