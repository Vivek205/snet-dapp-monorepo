import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";

const ClaimsSuccessPopup = ({ show, channelIdList, agiClaimed, escrowBalance }) => {
  return (
    <Modal disableBackdropClick open={show}>
      <Card>
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

export default ClaimsSuccessPopup;
