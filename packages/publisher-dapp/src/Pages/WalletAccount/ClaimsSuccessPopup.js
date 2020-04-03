import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";

const ClaimsSuccessPopup = ({ classes, show, channelIdList, agiClaimed, escrowBalance, handleClose }) => {
  return (
    <Modal disableBackdropClick open={show}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Claims Success Receipt</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <div>
          {channelIdList.map(channelId => (
            <span key={channelId}>{channelId}</span>
          ))}
        </div>
        <p>AGI Claimed {agiClaimed}</p>
        <p>Escrow Balance {escrowBalance}</p>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(ClaimsSuccessPopup);
