import React from "react";
import { withStyles } from "@material-ui/styles";
import StyledButton from "shared/dist/components/StyledButton";
import UserProfileCard from "shared/dist/components/UserProfileCard";

import { useStyles } from "./styles";

const UserProfileHeader = ({ classes, nickname, email }) => {
  return (
    <div className={classes.userProfileHeader}>
      <UserProfileCard nickName={nickname} email={email} />
      <StyledButton type="transparentBlueBorder" btnText="request developer's account" />
    </div>
  );
};

export default withStyles(useStyles)(UserProfileHeader);
