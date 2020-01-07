import { Auth } from "aws-amplify";
import { organizationActions } from "..";

export const SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NICKNAME = "SET_USER_NICKNAME";
export const SET_USER_EMAIL_VERIFIED = "SET_USER_EMAIL_VERIFIED";
export const SET_APP_INITIALIZED = "SET_APP_INITIALIZED";
export const RESET_USER_ON_SIGNOUT = "RESET_USER_ON_SIGNOUT";

const setUserLoggedIn = isLoggedin => ({ type: SET_USER_LOGGED_IN, payload: isLoggedin });

export const setUserEmail = email => ({ type: SET_USER_EMAIL, payload: email });

export const setUserNickname = nickname => ({ type: SET_USER_NICKNAME, payload: nickname });

const setUserEmailVerified = isEmailVerified => ({ type: SET_USER_EMAIL_VERIFIED, payload: isEmailVerified });

const setAppInitialized = isInitialized => ({ type: SET_APP_INITIALIZED, payload: isInitialized });

const resetUserOnSignout = () => ({ type: RESET_USER_ON_SIGNOUT });

export const fetchAuthenticatedUser = async () => {
  // TODO remove bypassCache and set timer for session
  const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
  return {
    nickname: currentUser.attributes.nickname,
    email: currentUser.attributes.email,
    email_verified: currentUser.attributes.email_verified,
    token: currentUser.signInUserSession.idToken.jwtToken,
  };
};

export const initializeApplication = async dispatch => {
  try {
    const { nickname, email, email_verified } = await fetchAuthenticatedUser();
    dispatch(organizationActions.getStatus);
    dispatch(setUserLoggedIn(true));
    dispatch(setUserEmail(email));
    dispatch(setUserNickname(nickname));
    dispatch(setUserEmailVerified(email_verified));
    dispatch(setAppInitialized(true));
  } catch (error) {
    dispatch(setAppInitialized(true));
  }
};

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

export const signout = async dispatch => {
  await Auth.signOut();
  dispatch(resetUserOnSignout());
};
