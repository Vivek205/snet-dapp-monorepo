import Organization from "../Organization";
import Invitee from "../Invitee";
import Default from "../_default";

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
  DEFAULT: {
    name: "default",
    path: fullPath(""),
    component: Default,
  },
};
