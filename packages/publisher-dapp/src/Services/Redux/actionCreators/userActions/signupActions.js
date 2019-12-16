import { Auth } from "aws-amplify";
import { loginActions } from "./";

export const signup = (nickname, email, password) => async dispatch => {
  await Auth.signUp({ username: email, password, attributes: { email, nickname } });
  return dispatch(loginActions.setUserNickname(nickname));
};

export const resendOTP = email => async dispatch => {
  return await Auth.resendSignUp(email);
};
