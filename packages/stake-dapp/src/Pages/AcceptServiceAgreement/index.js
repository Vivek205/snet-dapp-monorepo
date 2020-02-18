import React, { useState } from "react";

import { TermsAndConditionsDetails } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const AcceptServiceAgreement = ({ history }) => {
  const classes = useStyles();
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    history.push(GlobalRoutes.LANDING.path);
  };

  return (
    <div>
      <TermsAndConditions
        title={TermsAndConditionsDetails.title}
        formLabel={TermsAndConditionsDetails.formLabel}
        agreed={agreed}
        onChangeAgreed={() => setAgreed(!agreed)}
      />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" variant="contained" children="accept" onClick={handleAccept} disabled={!agreed} />
      </div>
    </div>
  );
};

export default AcceptServiceAgreement;
