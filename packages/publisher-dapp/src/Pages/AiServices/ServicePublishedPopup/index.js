import React from "react";
import Modal from "@material-ui/core/Modal";

const ServicePublishedPopup = ({ open, handleClose, classes }) => {
  return <Modal open={open} onClose={handleClose} className={classes.createServiceModal} />;
};

export default ServicePublishedPopup;
