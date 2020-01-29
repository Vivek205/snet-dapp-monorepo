import React from "react";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ToggleMenu = ({ isOpen, setIsOpen, classes }) => {
  if (isOpen) {
    return (
      <div className={classes.toolbar}>
        <IconButton onClick={() => setIsOpen(false)}>
          <ChevronLeftIcon className={classes.chevronIcon} />
        </IconButton>
      </div>
    );
  }
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => setIsOpen(true)}
      edge="start"
      className={clsx(classes.menuButton)}
    >
      <ChevronRightIcon className={classes.chevronIcon} />
    </IconButton>
  );
};

export default ToggleMenu;
