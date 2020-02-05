import React from "react";
import Typography from "@material-ui/core/Typography";
import MPENetworks from "singularitynet-platform-contracts/networks/MultiPartyEscrow";

import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useSelector } from "react-redux";

const AdvancedFields = () => {
  const classes = useStyles();
  const freeCallSignerAddress = useSelector(state => state.aiServiceDetails.freeCallSignerAddress);
  return (
    <div className={classes.advFilesContainer}>
      <Typography variant="subtitle1">Advanced Fields</Typography>
      <Typography className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter videbatur
        hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
      </Typography>
      <SNETTextfield
        icon
        name="mpeAddress"
        value={MPENetworks[process.env.REACT_APP_ETH_NETWORK].address}
        label="MPE Address"
        description=" Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. "
        disabled
      />
      <SNETTextfield
        icon
        name="aiServicePrice"
        value={freeCallSignerAddress}
        label="Ai Service Price"
        description=" Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. "
        disabled
      />
    </div>
  );
};

export default AdvancedFields;
