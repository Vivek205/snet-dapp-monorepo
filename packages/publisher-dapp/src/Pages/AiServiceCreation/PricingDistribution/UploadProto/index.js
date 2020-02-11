import React, { Fragment, useCallback, useState } from "react";
import Typography from "@material-ui/core/Typography";
import isEmpty from "lodash/isEmpty";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useStyles } from "./styles";
import SNETFileUpload from "shared/dist/components/SNETFileUpload";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { assetTypes } from "../../../../Utils/FileUpload";
import { getFileBinary } from "shared/dist/utils/FileUpload";

const UploadProto = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "", size: "", type: "" });
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();

  const handleDrop = useCallback(
    async (acceptedFiles, rejectedFiles) => {
      setAlert({});
      if (!isEmpty(rejectedFiles)) {
        return setAlert({ type: alertTypes.ERROR, message: "File rejected please check the maxSize and type of file" });
      }
      if (!isEmpty(acceptedFiles)) {
        try {
          const { name, size, type } = acceptedFiles[0];
          setSelectedFile({ name, size, type });
          const binaryFile = await getFileBinary(acceptedFiles[0]);
          await dispatch(
            aiServiceDetailsActions.uploadFile(assetTypes.SERVICE_PROTO_FILES, binaryFile, type, orgUuid, serviceUuid)
          );
          return setAlert({ type: alertTypes.SUCCESS, message: "File accepted" });
        } catch (error) {
          setAlert({ type: alertTypes.ERROR, message: "Unable to upload file" });
        }
      }
    },
    [dispatch, orgUuid, serviceUuid]
  );

  const acceptedFileTypes = "image/*";

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
