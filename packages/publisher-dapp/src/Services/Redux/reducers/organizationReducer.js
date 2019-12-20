import { SET_ONE_BASIC_DETAIL } from "../actionCreators/organizationActions";

const initialState = {
  id: "",
  name: "",
  duns: "",
  website: "",
  ownerFullName: "",
  phone: "",
  email: "",
  sameMailingAddress: false,
  shortDescription: "",
  longDescription: "",
  hqAddres: { street: "", apartment: "", city: "", zip: "", country: "" },
  mailingAddress: { street: "", apartment: "", city: "", zip: "", country: "" },
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONE_BASIC_DETAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default OrganizationReducer;
