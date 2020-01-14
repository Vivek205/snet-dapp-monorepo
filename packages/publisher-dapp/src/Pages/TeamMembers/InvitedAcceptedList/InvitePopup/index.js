import React from "react";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import SNETTextarea from "shared/dist/components/SNETTextarea";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const InvitePopup = ({ classes, open, handleClose }) => {
  const handleCancel = () => {
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleCancel} className={classes.inviteModal}>
      <Card>
        <CardHeader title={<Typography variant="h4">Invite Team Members</Typography>} />
        <CardContent className={classes.popupContent}>
          <SNETTextarea
            label="Email Address(es)"
            extraInfo="For multiple emails, separated by comma or line breaks"
            rowCount="6"
          />
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton children="cancel" color="primary" variant="text" />
          <SNETButton children="send invitation" color="primary" variant="text" disabled />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(InvitePopup);
