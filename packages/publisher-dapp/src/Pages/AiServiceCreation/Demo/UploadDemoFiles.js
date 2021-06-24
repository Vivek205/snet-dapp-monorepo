import React, { useCallback, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import SNETFileUpload from "shared/dist/components/SNETFileUpload";
import isEmpty from "lodash/isEmpty";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { assetTypes } from "../../../Utils/FileUpload";
import { useDispatch } from "react-redux";
import JSZip from "jszip";
import ValidationError from "shared/dist/utils/validationError";
import { validateCompressedFiles } from "../../../Utils/ValidateCompressedFiles";

const UploadDemoFiles = ({
  classes,
  orgUuid,
  serviceUuid,
  demoFilesUrl,
  changeDemoFiles,
  error,
  showUploadNotification,
}) => {
  const [alert, setAlert] = useState({});
  const [selectedFile, setSelectedFile] = useState({ name: "", size: "", type: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) setAlert({ type: alertTypes.ERROR, message: "Please upload Demo Files" });
  }, [error]);

  if (alert.type) {
    showUploadNotification(alert.type);
  }

  const handleFileDrop = useCallback(
    async (acceptedFiles, rejectedFiles) => {
      setAlert({});
      if (!isEmpty(rejectedFiles)) {
        return setAlert({ type: alertTypes.ERROR, message: "File rejected please check the maxSize and type of file" });
      }
      if (!isEmpty(acceptedFiles)) {
        try {
          const fileBlob = acceptedFiles[0];
          await validateIndexFile(fileBlob);
          const { name, size, type } = fileBlob;
          setSelectedFile({ name, size, type });

          const { url } = await dispatch(
            aiServiceDetailsActions.uploadFile(assetTypes.SERVICE_PAGE_COMPONENTS, fileBlob, orgUuid, serviceUuid)
          );
          changeDemoFiles(url);
          dispatch(aiServiceDetailsActions.setServiceTouchedFlag(true));
          return setAlert({ type: alertTypes.SUCCESS, message: "File accepted" });
        } catch ({ message }) {
          setAlert({ type: alertTypes.ERROR, message });
        }
      }
    },
    [changeDemoFiles, dispatch, orgUuid, serviceUuid]
  );

  const validateIndexFile = uploadedFile => {
    const fileToBePresent = "index.js";

    const fileInsideFolderRegex = "^(.+)/([^/]+)$";

    return new Promise((resolve, reject) => {
      const zip = new JSZip();
      zip.loadAsync(uploadedFile).then(entry => {
        const indexFileInsideSomeFolder = validateCompressedFiles(fileInsideFolderRegex, entry);

        if (indexFileInsideSomeFolder) {
          reject(new ValidationError("The index.js file should not be in a folder"));
        } else {
          const indexFileFound = Object.values(entry.files).some(file => {
            return file.name === fileToBePresent;
          });

          if (!indexFileFound) {
            reject(new ValidationError("The zip file should contain index.js file"));
          }

          resolve();
        }
      });
    });
  };

  const acceptedFileTypes = ["application/zip", "application/x-zip-compressed"];

  return (
    <div className={classes.stepThreeContainer}>
      <Typography variant="subtitle1" className={classes.stepsHeading}>
        Step 3: Upload the Demo Files
      </Typography>
      <Typography variant="subtitle2">Zip / Rar / compress all the project files and drop it here. </Typography>
      <SNETFileUpload
        onDrop={handleFileDrop}
        accept={acceptedFileTypes}
        multiple={false}
        showFileDetails
        fileName={selectedFile.name}
        fileSize={selectedFile.size}
        fileDownloadURL={demoFilesUrl}
        uploadSuccess={Boolean(demoFilesUrl)}
        error={error}
        helperText={
          <>
            <Typography>* Compress only the individual files with no parent folders</Typography>
            <Typography>* Package must be under 2mb</Typography>
            <Typography>* Make sure the extension is .zip</Typography>
          </>
        }
      />
      {alert.type === alertTypes.ERROR ? <AlertBox type={alert.type} message={alert.message} /> : null}
    </div>
  );
};

export default UploadDemoFiles;
