import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useStyles } from "./styles";
import UserProfileCard from "shared/dist/components/UserProfileCard";

const UserProfilePopUp = ({ classes, handleClick }) => {
  const { nickName } = useSelector(state => state.user);
  return (
    <div className={classes.UserProfilePopUpContainer}>
      <UserProfileCard nickName={nickName} />
      <ul>
        <li onClick={handleClick}>
          <ExitToAppIcon />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  )
};

export default withStyles(useStyles)(UserProfilePopUp);
