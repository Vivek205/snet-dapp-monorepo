import React from "react";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const AdvancedFields = () => {
  const classes = useStyles();
  return (
    <div className={classes.advFilesContainer}>
      <Typography variant="subtitle1">Advanced Fields</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
        hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
      </Typography>
      <SNETTextfield
        icon
        name="aiServicePrice"
        // TODO value
        // TODO onChange
        label="Ai Service Price"
        description=" Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. "
        disabled
      />
      <SNETTextfield
        icon
        name="aiServicePrice"
        // TODO value
        // TODO onChange
        label="Ai Service Price"
        description=" Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. "
        disabled
      />
    </div>
  );
};

export default AdvancedFields;
