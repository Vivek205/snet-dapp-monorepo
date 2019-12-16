import { Auth } from "aws-amplify";
import { login } from "./";

export const signup = (nickname, email, password) => async dispatch => {
  // try {
    await Auth.signUp({ username: email, password, attributes: { email, nickname } });
    return dispatch(login.setUserNickname(nickname));
  // } catch (error) {
  //   // TODO add signup failure logic
  // }
};
