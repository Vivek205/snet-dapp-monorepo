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
import { useHistory } from "react-router-dom";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

const CreateNewServicePopup = ({ classes, open, handleClose }) => {
  const [serviceName, setServiceName] = useState("");
  const history = useHistory();

  const handleCancel = () => {
    handleClose();
  };

  const handleOnEnterServiceName = e => {
    setServiceName(e.target.value);
  };

  const handleContinue = () => {
    history.push(GlobalRoutes.AI_SERVICE_CREATION.path);
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
          <Typography className={classes.popupDescription}>
            Your AI service needs to have a unique name that does not duplicate any other existing service on the AI
            Marketpalce.
          </Typography>
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
          <SNETButton
            children="create"
            color="primary"
            variant="contained"
            disabled={!serviceName}
            onClick={handleContinue}
          />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(CreateNewServicePopup);
