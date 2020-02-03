import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const UploadProto = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h6">Upload the Proto files</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
        hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
      </Typography>
    </Fragment>
  );
};

export default UploadProto;
