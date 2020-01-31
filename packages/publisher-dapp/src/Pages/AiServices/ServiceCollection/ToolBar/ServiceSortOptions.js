import React, { Fragment, useState } from "react";

import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useStyles } from "./styles";

const ServiceSortOptions = () => {
  const [activeSortItem, setActiveSortItem] = useState("");
  const classes = useStyles();

  const handleSortChange = event => {
    setActiveSortItem(event.target.value);
  };

  return (
    <Fragment>
      <span className={classes.sortbyTxt}>Sort by:</span>
      <StyledDropdown value={activeSortItem} labelTxt="select" onChange={handleSortChange} />
    </Fragment>
  );
};

export default ServiceSortOptions;
