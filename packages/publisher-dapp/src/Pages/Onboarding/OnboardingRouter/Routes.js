import SingularityAccount from "../SingularityAccount";
import AcceptServiceAgreement from "../AcceptServiceAgreement";
import Authenticate from "../Authenticate";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

const basePath = GlobalRoutes.ONBOARDING.path;

const fullPath = path => `${basePath}${path}`;

export const OnboardingRoutes = {
  DEFAULT_PAGE: {
    name: "default",
    path: fullPath("/"),
    exact: true,
    component: SingularityAccount,
  },
  SINGULARITY_ACCOUNT: {
    name: "singularitynet account",
    path: fullPath("/singularityaccount"),
    component: SingularityAccount,
  },
  ACCEPT_SERVICE_AGREEMENT: {
    name: "accept service agreement",
    path: fullPath("/agreement"),
    component: AcceptServiceAgreement,
  },
  AUTHENTICATE_ID: {
    name: "authenticate id",
    path: fullPath("/authenticate"),
    component: Authenticate,
  },
};
