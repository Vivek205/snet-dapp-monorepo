import { userActions } from "../actionCreators";

const initialState = {
  isLoggedIn: false,
  email: undefined,
  nickname: undefined,
  isEmailVerified: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER_LOGGED_IN: {
      return { ...state, isLoggedIn: action.payload };
    }
    case userActions.SET_USER_EMAIL: {
      return { ...state, email: action.payload };
    }
    case userActions.SET_USER_NICKNAME: {
      return { ...state, nickname: action.payload };
    }
    case userActions.SET_USER_EMAIL_VERIFIED: {
      return { ...state, isEmailVerified: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
