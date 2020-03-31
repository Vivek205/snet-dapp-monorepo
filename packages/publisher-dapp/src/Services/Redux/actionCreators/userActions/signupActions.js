import { Auth } from "aws-amplify";
import { loginActions } from "./";
import { loaderActions } from "../index";
import { LoaderContent } from "../../../../Utils/Loader";

export const signup = (nickname, email, password) => async dispatch => {
  await Auth.signUp({ username: email, password, attributes: { email, nickname } });
  dispatch(loginActions.setUserNickname(nickname));
  return dispatch(loginActions.setUserEmail(email));
};

export const resendOTP = email => async () => {
  return await Auth.resendSignUp(email);
};

export const signupConfirm = (email, otp) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.LOGIN));
    await Auth.confirmSignUp(email, otp);
    return dispatch(loaderActions.stopAppLoader());
  } catch (e) {
    dispatch(loaderActions.stopAppLoader());
    throw e;
  }
};
