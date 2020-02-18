import Organization from "../Organization";
import Invitee from "../Invitee";
import Default from "../_default";
import Individual from "../Individual";

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
  INDIVIDUAL: {
    name: "invitee",
    path: fullPath("/individual"),
    component: Individual,
  },
  DEFAULT: {
    name: "default",
    path: fullPath(""),
    component: Default,
  },
};
