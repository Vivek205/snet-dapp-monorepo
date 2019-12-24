import { ContactsTypes } from "../../../Utils/Contacts";
import { organizationActions } from "../actionCreators";

const initialState = {
  id: "",
  name: "",
  duns: "",
  website: "",
  ownerFullName: "",
  sameMailingAddress: false,
  shortDescription: "",
  longDescription: "",
  contacts: [{ type: ContactsTypes.SUPPORT, email: "", phone: "" }],
  groups: [
    {
      name: "North America",
      id: "US-2651-DC",
      uuid: "",
      paymentAddress: "",
      paymentConfig: {
        paymentExpirationThreshold: "",
        paymentChannelStorageType: "",
        paymentChannelStorageClient: {
          connectionTimeout: "",
          requestTimeout: "",
          endpoints: [],
        },
      },
    },
  ],
  hqAddres: { street: "", apartment: "", city: "", zip: "", country: "" },
  mailingAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case organizationActions.SET_ONE_BASIC_DETAIL:
      return { ...state, ...action.payload };
    case organizationActions.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case organizationActions.SET_GROUPS:
      return { ...state, groups: action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
