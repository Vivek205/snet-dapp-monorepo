import React from "react";
import StyledButton from "shared/dist/components/StyledButton";
import OfflineIndicator from "shared/dist/components/OfflineIndicator";

const ServiceAvailabilityToggler = ({ isAvailable }) => {
  if (!isAvailable) {
    return <OfflineIndicator show />;
  }
  return <StyledButton type="transparent" btnText="demo" />;
};

export default ServiceAvailabilityToggler;
