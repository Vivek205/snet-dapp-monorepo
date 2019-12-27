import { ContactsTypes } from "../../../Utils/Contacts";
import { organizationActions } from "../actionCreators";
import { organizationSetupStatuses } from "../../../Utils/organizationSetup";

const initialState = {
  status: organizationSetupStatuses.NOT_STARTED,
  id: "",
  uuid: "",
  name: "",
  duns: "",
  website: "",
  ownerFullName: "",
  phone: "",
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
        paymentExpirationThreshold: "40320",
        paymentChannelStorageType: "etcd",
        paymentChannelStorageClient: {
          connectionTimeout: "5",
          requestTimeout: "3",
          endpoints: [],
        },
      },
    },
  ],
  assets: {
    heroImage: {
      raw: "",
      fileType: "",
    },
  },
  hqAddres: { street: "", apartment: "", city: "", zip: "", country: "" },
  mailingAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case organizationActions.SET_ONE_BASIC_DETAIL:
      return { ...state, ...action.payload };
    case organizationActions.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case organizationActions.SET_HERO_IMAGE:
      return { ...state, assets: { ...state.assets, heroImage: action.payload } };
    case organizationActions.SET_GROUPS:
      return { ...state, groups: action.payload };
    case organizationActions.SET_ORGANIZATION_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
