import { SET_ONE_BASIC_DETAIL, SET_CONTACTS } from "../actionCreators/organizationActions";
import { ContactsTypes } from "../../../Utils/Contacts";

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
  hqAddres: { street: "", apartment: "", city: "", zip: "", country: "" },
  mailingAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONE_BASIC_DETAIL:
      return { ...state, ...action.payload };
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
