import React from "react";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";

import { useStyles } from "./styles";

const UserProfileCard = ({ classes, nickName, onClose }) => {
  return (
    <div className={classes.Userdetails}>
      <PersonIcon />
      <div>
        <h4>{nickName}</h4>
      </div>
      {onClose && <CloseIcon className={classes.closeIcon} onClick={onClose} />}
    </div>
  );
};

UserProfileCard.propTypes = {
  nickName: PropTypes.string,
  onClose: PropTypes.func,
};

export default withStyles(useStyles)(UserProfileCard);
