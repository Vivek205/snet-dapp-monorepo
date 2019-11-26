import React from "react";

const AlertLink = ({
  link
}) => {
  if (link) {
    return React.createElement("a", {
      href: "#",
      title: "demo"
    }, link);
  }

  return null;
};

export default AlertLink;