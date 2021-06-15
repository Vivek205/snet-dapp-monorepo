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
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const ConfirmationPopup = ({ classes, open, handleClose, handleContinue }) => {
  const handleCancel = () => {
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.orgCreationConfirmationModal}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Confirm Details</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.popupContent}>
          <Typography className={classes.popupDescription}>
            Please verify the information entered. Once submitted the details cannot be modified.
          </Typography>
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton children="cancel" color="primary" variant="text" onClick={handleCancel} />
          <SNETButton children="continue" color="primary" variant="contained" onClick={handleContinue} />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(ConfirmationPopup);
