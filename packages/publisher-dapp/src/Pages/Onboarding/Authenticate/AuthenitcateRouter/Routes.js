import Organization from "../Organization";
import Invitee from "../Invitee";
import Default from "../_default";
// import Individual from "../Individual";
// import IndividualStatus from "../Individual/status";

const basePath = "/onboarding/authenticate";

const fullPath = path => `${basePath}${path}`;

export const AuthenticateRoutes = {
  ORGANIZATION: {
    name: "organization",
    path: fullPath("/organization"),
    component: Organization,
  },
  INVITEE: {
    name: "invitee",
    path: fullPath("/acceptinvite"),
    component: Invitee,
  },
  // INDIVIDUAL: {
  //   name: "individual",
  //   path: fullPath("/individual"),
  //   component: Individual,
  //   exact: true,
  // },
  // INDIVIDUAL_STATUS: {
  //   name: "individual status",
  //   path: fullPath("/individual/status"),
  //   component: IndividualStatus,
  // },
  DEFAULT: {
    name: "default",
    path: fullPath(""),
    component: Default,
  },
};
