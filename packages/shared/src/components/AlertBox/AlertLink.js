import React from "react";

const AlertLink = ({ link, linkTo }) => {
  if (link) {
    return (
      <a href={linkTo} title={link} target="_blank">
        {link}
      </a>
    );
  }
  return null;
};

export default AlertLink;
