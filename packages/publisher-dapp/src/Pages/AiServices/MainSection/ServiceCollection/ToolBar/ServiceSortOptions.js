import React, { Fragment, useState } from "react";

import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useStyles } from "./styles";

const ServiceSortOptions = ({ pagination, updatePagination, fetchService }) => {
  const [activeSortItem, setActiveSortItem] = useState(true);
  const classes = useStyles();

  const handleSortChange = async event => {
    setActiveSortItem(activeSortItem(false));
  };

  return (
    <Fragment>
      <span className={classes.sortbyTxt}>Sort by:</span>
      <StyledDropdown value="value" labelTxt="select" onChange={handleSortChange} />
    </Fragment>
  );
};

export default ServiceSortOptions;
