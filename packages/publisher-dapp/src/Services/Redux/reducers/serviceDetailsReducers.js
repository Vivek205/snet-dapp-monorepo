import { serviceDetailsActions } from "../actionCreators";

const initialState = {
  serviceUuid: "",
  serviceName: "",
};

const serviceDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case serviceDetailsActions.SET_AI_SERVICE_NAME:
      return { ...state, serviceName: action.payload };
    case serviceDetailsActions.SET_AI_SERVICE_UUID:
      return { ...state, serviceUuid: action.payload };
    default:
      return state;
  }
};

export default serviceDetailsReducer;
