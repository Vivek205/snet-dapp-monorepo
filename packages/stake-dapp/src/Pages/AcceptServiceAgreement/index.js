import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TermsAndConditionsDetails, tncAgreementVesrion } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { loginActions } from "../../Services/Redux/actionCreators/userActions";
import Terms from "./Terms";

const AcceptServiceAgreement = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    try {
      dispatch(loginActions.updateUserTnCAttribute(tncAgreementVesrion));
      history.push(GlobalRoutes.LANDING.path);
    } catch (_error) {
      history.push(GlobalRoutes.LANDING.path);
    }
  };

  return (
    <div>
      <TermsAndConditions
        title={TermsAndConditionsDetails.title}
        formLabel={TermsAndConditionsDetails.formLabel}
        agreed={agreed}
        onChangeAgreed={() => setAgreed(!agreed)}
        Content={Terms}
      />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" variant="contained" children="accept" onClick={handleAccept} disabled={!agreed} />
      </div>
    </div>
  );
};

export default AcceptServiceAgreement;
