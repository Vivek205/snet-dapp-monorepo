import React from "react";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import SNETTextarea from "shared/dist/components/SNETTextarea";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const InvitePopup = ({ classes, open, handleClose }) => {
  const handleCancel = () => {
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleCancel} className={classes.inviteModal}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Invite Team Members</Typography>}
          action={
            <IconButton onClick={handleCancel}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.popupContent}>
          <SNETTextarea
            label="Email Address(es)"
            extraInfo="For multiple emails, separated by comma or line breaks"
            rowCount="6"
          />
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton children="cancel" color="primary" variant="text" />
          <SNETButton children="send invitation(s)" color="primary" variant="contained" disabled />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(InvitePopup);
