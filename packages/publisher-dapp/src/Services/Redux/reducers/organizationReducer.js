import { ContactsTypes } from "../../../Utils/Contacts";
import { organizationActions, inviteMembersActions } from "../actionCreators";
import { organizationSetupStatuses, organizationTypes } from "../../../Utils/organizationSetup";
import { memberStatus } from "../../../Utils/TeamMembers.js";

const initialState = {
  status: organizationSetupStatuses.NOT_STARTED,
  id: "",
  uuid: "",
  name: "",
  type: organizationTypes.ORGANIZATION,
  duns: "",
  website: "",
  ownerFullName: "",
  phone: "",
  shortDescription: "",
  longDescription: "",
  metadataIpfsHash: "",
  contacts: [
    { type: ContactsTypes.GENERAL, email: "", phone: "" },
    { type: ContactsTypes.SUPPORT, email: "", phone: "" },
  ],
  groups: [
    {
      name: "default_group",
      id: "",
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
  hqAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
  sameMailingAddress: false,
  mailingAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
  ownerAddress: "",
  members: {
    [memberStatus.PENDING]: [],
    [memberStatus.ACCEPTED]: [],
    [memberStatus.PUBLISHED]: [],
    [memberStatus.PUBLISH_IN_PROGRESS]: [],
    [memberStatus.VERIFIED]: [],
    [memberStatus.EXPIRED]: [],
  },
  owner: "",
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case organizationActions.SET_ALL_ATTRIBUTES:
      return { ...state, ...action.payload };
    case organizationActions.SET_ONE_BASIC_DETAIL:
      return { ...state, ...action.payload };
    case organizationActions.RESET_ORGANIZATION_DATA:
      return { ...state, ...initialState };
    case organizationActions.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case organizationActions.SET_HERO_IMAGE:
      return { ...state, assets: { ...state.assets, heroImage: action.payload } };
    case organizationActions.SET_GROUPS:
      return { ...state, groups: action.payload };
    case organizationActions.SET_ORGANIZATION_STATUS:
      return { ...state, status: action.payload };
    case organizationActions.SET_HQ_ADDRESS_DETAIL:
      return { ...state, hqAddress: { ...state.hqAddress, ...action.payload } };
    case organizationActions.SET_MAILING_ADDRESS_DETAIL:
      return { ...state, mailingAddress: { ...state.mailingAddress, ...action.payload } };
    case inviteMembersActions.SET_MEMBERS_FOR_STATUS:
      return { ...state, members: { ...state.members, ...action.payload } };
    case organizationActions.SET_ORG_OWNER:
      return { ...state, owner: action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
