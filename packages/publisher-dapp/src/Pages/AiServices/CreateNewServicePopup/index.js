import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const CreateNewServicePopup = ({ classes, open, handleClose }) => {
  const [disableCreateBtn, setdisableCreateBtn] = useState(true);

  const handleCancel = () => {
    handleClose();
  };

  const handleOnEnterServiceName = () => {
    setdisableCreateBtn(false);
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.createServiceModal}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Create New AI Service</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.popupContent}>
          <p className={classes.popupDescription}>
            Your AI service needs to have a unique name that does not duplicate any other existing service on the AI
            Marketpalce.
          </p>
          <SNETTextfield
            name="AI Service Name"
            label="AI Service Name"
            icon
            maxCount="50"
            minCount="15"
            onChange={handleOnEnterServiceName}
          />
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton children="cancel" color="primary" variant="text" onClick={handleCancel} />
          <SNETButton children="create" color="primary" variant="contained" disabled={disableCreateBtn} />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(CreateNewServicePopup);
