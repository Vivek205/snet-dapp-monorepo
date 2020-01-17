import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { userEntities } from "../../../Utils/user";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { verifyInvitationCodeForm } from "./content";
import SNETButton from "shared/dist/components/SNETButton";
import AlertText from "shared/dist/components/AlertText";
import { alertTypes } from "shared/dist/components/AlertBox";
import { inviteMembersActions } from "../../../Services/Redux/actionCreators";
import validator from "shared/dist/utils/validator";
import { verificationCodeConstraints } from "./validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import { checkIfKnownError } from "shared/dist/utils/error";

const VerifyInvitation = () => {
  const userEntity = useSelector(state => state.user.entity);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState({});

  const handleVerify = async () => {
    try {
      const isNotValid = validator({ code }, verificationCodeConstraints);
      if (isNotValid) {
        throw new ValidationError(isNotValid[0]);
      }
      await dispatch(inviteMembersActions.verifyInvitation(code));
      setAlert({ type: alertTypes.SUCCESS, message: "Verified" });
    } catch (error) {
      if (checkIfKnownError(error)) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
      return setAlert({ type: alertTypes.ERROR, message: "something went wrong" });
    }
  };

  if (userEntity !== userEntities.INVITEE) {
    return null;
  }
  return (
    <Grid container sx={12} sm={12} md={12} lg={12}>
      <Grid item sx={12} sm={12} md={6} lg={6}>
        <SNETTextfield {...verifyInvitationCodeForm} value={code} onChange={e => setCode(e.target.value)} />
      </Grid>
      <Grid sx={12} sm={12} md={6} lg={6}>
        <SNETButton children="verify" color="primary" variant="contained" onClick={handleVerify} />
      </Grid>
      <AlertText message={alert.message} type={alert.type} />
    </Grid>
  );
};

export default VerifyInvitation;
