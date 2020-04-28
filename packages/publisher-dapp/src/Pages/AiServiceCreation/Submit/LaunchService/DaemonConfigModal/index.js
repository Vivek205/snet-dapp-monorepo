import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import SNETButton from "shared/dist/components/SNETButton";
import DaemonConfig from "../../../../../Components/DaemonConfig";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const DaemonConfigModal = ({ classes, open, handleClose, daemonConfig }) => {
  return (
    <Modal open={open} onClose={handleClose} className={classes.createServiceModal}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Production Ready configuration</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.popupContent}>
          <Typography className={classes.popupDescription}>Copy this configuration in your daemons</Typography>
          <DaemonConfig
            config={daemonConfig}
            footerNote="Please use the above configuration values in your daemon configuration. This is to ensure that your daemon is not in the curation mode anymore. Once the Service has been successfully published on the SingularityNet Platform, restart the daemon."
          />
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton type="submit" children="ok" color="primary" variant="contained" onClick={handleClose} />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(DaemonConfigModal);
