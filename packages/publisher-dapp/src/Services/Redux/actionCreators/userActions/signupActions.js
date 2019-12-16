import { Auth } from "aws-amplify";
import { loginActions } from "./";

export const signup = (nickname, email, password) => async dispatch => {
  await Auth.signUp({ username: email, password, attributes: { email, nickname } });
  return dispatch(loginActions.setUserNickname(nickname));
};

export const resendOTP = email => async () => {
  return await Auth.resendSignUp(email);
};

export const signupConfirm = (email, otp) => async () => {
  return await Auth.confirmSignUp(email, otp);
};
