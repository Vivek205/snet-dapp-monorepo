import AcceptServiceAgreement from "../AcceptServiceAgreement";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import Default from "../_default";

const basePath = GlobalRoutes.ONBOARDING.path;

const fullPath = path => `${basePath}${path}`;

export const OnboardingRoutes = {
  DEFAULT_PAGE: {
    name: "default",
    path: fullPath("/"),
    exact: true,
    component: Default,
  },
  ACCEPT_SERVICE_AGREEMENT: {
    name: "accept service agreement",
    path: fullPath("/agreement"),
    component: AcceptServiceAgreement,
  },
};
