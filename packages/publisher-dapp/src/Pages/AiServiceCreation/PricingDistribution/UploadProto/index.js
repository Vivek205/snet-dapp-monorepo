import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import UploadFile from "../../UploadFile";
import { useStyles } from "./styles";

import SNETTextfield from "shared/dist/components/SNETTextfield";

const UploadProto = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="subtitle1">Upload the Proto files</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
        hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
      </Typography>
      <UploadFile />
      <div className={classes.modelTextfieldContainer}>
        <SNETTextfield
          icon
          label="Model IPFS Hash"
          name="model-ipfs-hash"
          description="The hash of the proto file. This is automatically derived from the uploaded file."
        />
      </div>
    </Fragment>
  );
};

export default UploadProto;
