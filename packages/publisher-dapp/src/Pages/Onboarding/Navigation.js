import React from "react";
import PropTypes from "prop-types";

import SNETButton from "shared/dist/components/SNETButton";

const Navigation = props => {
  const { handleNext, handlePrev } = props;

  return (
    <div>
      {handlePrev ? <SNETButton children="Back" onClick={handlePrev} /> : ""}
      {handleNext ? <SNETButton children="Next" onClick={handleNext} /> : ""}
    </div>
  );
};

Navigation.propTypes = {
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
};

export default Navigation;
