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
  contacts: [
    { type: ContactsTypes.SUPPORT, email: "", phone: "dfkd" },
    { type: ContactsTypes.SUPPORT, email: "", phone: "" },
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
    default:
      return state;
  }
};

export default OrganizationReducer;
