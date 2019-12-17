import { Auth } from "aws-amplify";
import { login } from "./";

export const signup = (nickname, email, password) => async dispatch => {
  await Auth.signUp({ username: email, password, attributes: { email, nickname } });
  return dispatch(login.setUserNickname(nickname));
};
