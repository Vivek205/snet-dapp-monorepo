import React from "react";
import SNETButton from "shared/dist/components/SNETButton";

const Individual = () => {
  const handleVerify = () => {
    //  TODO call initiate API of Jumio-Marketplace
  };
  return (
    <div>
      Individual
      <SNETButton onClick={handleVerify}>Verify via Jumio</SNETButton>
    </div>
  );
};

export default Individual;
