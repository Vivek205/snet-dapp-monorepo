import { Auth } from "aws-amplify";

export const SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NICKNAME = "SET_USER_NICKNAME";
export const SET_USER_EMAIL_VERIFIED = "SET_USER_EMAIL_VERIFIED";

const setUserLoggedIn = isLoggedin => ({ type: SET_USER_LOGGED_IN, payload: isLoggedin });

const setUserEmail = email => ({ type: SET_USER_EMAIL, payload: email });

const setUserNickname = nickname => ({ type: SET_USER_NICKNAME, payload: nickname });

const setUserEmailVerified = isEmailVerified => ({ type: SET_USER_EMAIL_VERIFIED, payload: isEmailVerified });

const loginSucess = loginResponse => async dispatch => {
  const { email, nickname, email_verified: isEmailVerified } = loginResponse.attributes;
  return await Promise.all([
    dispatch(setUserLoggedIn(true)),
    dispatch(setUserEmail(email)),
    dispatch(setUserNickname(nickname)),
    dispatch(setUserEmailVerified(isEmailVerified)),
  ]);
};

const handleUserNotConfirmed = email => async dispatch => {
  return await Promise.all([dispatch(setUserLoggedIn(true)), dispatch(setUserEmail(email))]);
};

export const login = (email, password) => async dispatch => {
  try {
    const loginResponse = await Auth.signIn(email, password);
    return await dispatch(loginSucess(loginResponse));
  } catch (error) {
    if (error.code === "UserNotConfirmedException") {
      await dispatch(handleUserNotConfirmed(email));
    }
    throw error;
  }
};
