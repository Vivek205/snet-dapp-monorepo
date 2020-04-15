import React from "react";
import Modal from "@material-ui/core/Modal";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox from "shared/dist/components/AlertBox";

const ServicePublishedPopup = ({ open, handleClose, classes }) => {
  return (
    <Modal open={open} onClose={handleClose} className={classes.createServiceModal}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h4">Your service is published</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.popupContent}>
          <Typography className={classes.popupDescription}>
            Your AI service is published in blockchain. It will take some time to reflect in our database.
          </Typography>
          <div className={classes.alertBoxContainer}>
            <AlertBox type={alert.type} message={alert.message} />
          </div>
        </CardContent>
        <CardActions className={classes.btnContainer}>
          <SNETButton type="submit" children="ok" color="primary" variant="contained" onClick={handleClose} />
        </CardActions>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(ServicePublishedPopup);
