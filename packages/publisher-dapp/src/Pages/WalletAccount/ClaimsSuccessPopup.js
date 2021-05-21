import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import { useStyles } from "./styles";
import AlertText from "shared/dist/components/AlertText";
import { alertTypes } from "shared/dist/components/AlertBox";

const ClaimsSuccessPopup = ({ classes, show, channelIdList, agiClaimed, escrowBalance, handleClose }) => {
  return (
    <Modal disableBackdropClick open={show}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h6">Claims Success Receipt</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <div className={classes.greyBox}>
          <div>
            <p>Channels IDs :</p>
            {channelIdList.map(channelId => (
              <span key={channelId}>{channelId}</span>
            ))}
          </div>
        </div>
        <AlertText type={alertTypes.SUCCESS} message="Claims successfully Processed" />
        <Typography variant="h6">Transaction Receipt</Typography>
        <div className={classes.greyBox}>
          <div>
            <div className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <p>AGIX Claimed</p>
            </div>
            <p>
              {agiClaimed}
              <span>AGIX</span>
            </p>
          </div>
          <div>
            <div className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <p>Escrow Balance</p>
            </div>
            <p>
              {escrowBalance}
              <span>AGIX</span>
            </p>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(ClaimsSuccessPopup);
