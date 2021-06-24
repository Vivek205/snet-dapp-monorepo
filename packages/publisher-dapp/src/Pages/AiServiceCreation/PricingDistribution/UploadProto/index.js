import React, { Fragment, useCallback, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import isEmpty from "lodash/isEmpty";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import JSZip from "jszip";
import { validateCompressedFiles } from "../../../../Utils/ValidateCompressedFiles";

import { useStyles } from "./styles";
import SNETFileUpload from "shared/dist/components/SNETFileUpload";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";
import { assetTypes } from "../../../../Utils/FileUpload";
import ValidationError from "shared/dist/utils/validationError";
import { checkIfKnownError } from "shared/dist/utils/error";

const UploadProto = ({ changeProtoFiles, protoFilesUrl, invalidFields }) => {
  const classes = useStyles();
  const [alert, setAlert] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "", size: "", type: "" });
  const dispatch = useDispatch();
  const { orgUuid, serviceUuid } = useParams();

  useEffect(() => {
    if (!alert.message && Boolean(protoFilesUrl)) {
      setAlert({
        type: alertTypes.SUCCESS,
        message: "File have been uploaded. You can download your files on clicking the download button",
      });
    }
  }, [alert.message, protoFilesUrl]);

  const validateProtoFile = uploadedFile => {
    const protoFileRegexPattern = "(proto)";
    const protoFilesInsideFolder = "^(.+)/([^/]+)$";

    return new Promise((resolve, reject) => {
      const zip = new JSZip();
      zip.loadAsync(uploadedFile).then(entry => {
        const filesInsideSomeFolder = validateCompressedFiles(protoFilesInsideFolder, entry);

        if (filesInsideSomeFolder) {
          reject(new ValidationError("Proto files should not be in a folder"));
        } else if (!validateCompressedFiles(protoFileRegexPattern, entry)) {
          reject(new ValidationError("Proto file not found"));
        } else {
          resolve();
        }
      });
    });
  };

  const handleDrop = useCallback(
    async (acceptedFiles, rejectedFiles) => {
      setAlert({});
      if (!isEmpty(rejectedFiles)) {
        return setAlert({ type: alertTypes.ERROR, message: "File rejected please check the maxSize and type of file" });
      }
      if (!isEmpty(acceptedFiles)) {
        try {
          const fileBlob = acceptedFiles[0];
          await validateProtoFile(fileBlob);
          const { name, size, type } = fileBlob;
          setSelectedFile({ name, size, type });
          const { url } = await dispatch(
            aiServiceDetailsActions.uploadFile(assetTypes.SERVICE_PROTO_FILES, fileBlob, orgUuid, serviceUuid)
          );
          changeProtoFiles(url);
          dispatch(aiServiceDetailsActions.setServiceTouchedFlag(true));
          return setAlert({ type: alertTypes.SUCCESS, message: "File accepted" });
        } catch (error) {
          if (checkIfKnownError(error)) {
            return setAlert({ type: alertTypes.ERROR, message: error.message });
          }
          setAlert({ type: alertTypes.ERROR, message: "Unable to upload file" });
        }
      }
    },
    [changeProtoFiles, dispatch, orgUuid, serviceUuid]
  );

  const acceptedFileTypes = ["application/zip", "application/x-zip-compressed"];

  return (
    <Fragment>
      <Typography variant="subtitle1">Upload the Proto files</Typography>
      <Typography className={classes.description}>
        Services define their API using protocol buffers. This allows SingularityNET clients to determine the
        request/response schema programmatically. Read more &nbsp;
        <a
          href="https://dev.singularitynet.io/docs/ai-developers/service-setup/"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
      </Typography>
      <SNETFileUpload
        onDrop={handleDrop}
        accept={acceptedFileTypes}
        multiple={false}
        showFileDetails
        helperText={
          <>
            <Typography>* Compress only the individual files with no parent folders</Typography>
            <Typography>* Package must be under 2mb</Typography>
            <Typography>* Make sure the extension is .zip</Typography>
          </>
        }
        fileName={selectedFile.name}
        fileSize={selectedFile.size}
        fileDownloadURL={protoFilesUrl}
        uploadSuccess={Boolean(protoFilesUrl)}
        error={!!invalidFields && !Boolean(protoFilesUrl) ? "assets.protoFiles.url" in invalidFields : ""}
      />
      {alert.type === alertTypes.ERROR ? (
        <div className={classes.errorContainer}>
          <AlertBox type={alert.type} message={alert.message} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default UploadProto;
