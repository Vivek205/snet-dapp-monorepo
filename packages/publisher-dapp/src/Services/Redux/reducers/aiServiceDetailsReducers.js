import { aiServiceDetailsActions } from "../actionCreators";
import { ContactsTypes } from "../../../Utils/Contacts";
import { serviceSetupStatuses } from "../../../Utils/serviceSetup";

const initialState = {
  touch: false,
  status: serviceSetupStatuses.NOT_STARTED,
  uuid: "",
  name: "",
  id: "",
  availability: "",
  shortDescription: "",
  longDescription: "",
  projectURL: "",
  proto: {
    ipfsHash: "",
    encoding: "",
    type: "",
  },
  assets: {
    heroImage: {
      url: "",
      ipfsHash: "",
    },
    demoFiles: {
      url: "",
      ipfsHash: "",
    },
    protoFiles: {
      url: "",
      ipfsHash: "",
    },
  },
  contributors: [],
  ipfsHash: "",
  contacts: [
    { type: ContactsTypes.GENERAL, email: "", phone: "" },
    { type: ContactsTypes.SUPPORT, email: "", phone: "" },
  ],
  groups: [
    {
      groupId: "",
      pricing: [],
      endpoints: [],
    },
  ],
  tags: [],
  freecallsAllowed: "",
  freeCallSignerAddress: "",
  price: "",
  priceModel: "fixed_price",
  freeCallsAllowed: "",
  endpoints: [],
};

const serviceDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case aiServiceDetailsActions.SET_AI_SERVICE_TOUCH_FLAG:
      return { ...state, touch: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_ID:
      return { ...state, id: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_ID_AVAILABILITY:
      return { ...state, availability: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_NAME:
      return { ...state, name: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_UUID:
      return { ...state, uuid: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_ENDPOINTS:
      return { ...state, endpoints: action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_DETAIL_LEAF:
      return { ...state, [action.payload.name]: action.payload.value };
    case aiServiceDetailsActions.SET_AI_SERVICE_MULTIPLE_DETAILS:
      return { ...state, ...action.payload };
    case aiServiceDetailsActions.SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS:
      return { ...state, freeCallSignerAddress: action.payload };
    default:
      return state;
  }
};

export default serviceDetailsReducer;
