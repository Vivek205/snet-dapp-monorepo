import { serviceDetailsActions } from "../actionCreators";

const initialState = {
  uuid: "",
  name: "",
  id: "",
  availability: "",
};

const serviceDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case serviceDetailsActions.SET_AI_SERVICE_ID:
      return { ...state, id: action.payload };
    case serviceDetailsActions.SET_AI_SERVICE_ID_AVAILABILITY:
      return { ...state, availability: action.payload };
    case serviceDetailsActions.SET_AI_SERVICE_NAME:
      return { ...state, name: action.payload };
    case serviceDetailsActions.SET_AI_SERVICE_UUID:
      return { ...state, uuid: action.payload };
    default:
      return state;
  }
};

export default serviceDetailsReducer;
