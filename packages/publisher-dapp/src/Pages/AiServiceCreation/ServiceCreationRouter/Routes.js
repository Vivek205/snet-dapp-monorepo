import Profile from "../Profile";
import Demo from "../Demo";
import PricingDistribution from "../PricingDistribution";
import Submit from "../Submit";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import Default from "../_default";

const basePath = GlobalRoutes.AI_SERVICE_CREATION.path;

const fullPath = path => `${basePath}${path}`;

export const ServiceCreationRoutes = {
  DEFAULT_PAGE: {
    name: "default",
    path: fullPath("/"),
    exact: true,
    component: Default,
  },
  PROFILE: {
    name: "profile",
    path: fullPath("/profile"),
    component: Profile,
  },
  DEMO: {
    name: "demo",
    path: fullPath("/demo"),
    component: Demo,
  },
  PRICING_AND_DISTRIBUTION: {
    name: "pricinganddistribution",
    path: fullPath("/pricing"),
    component: PricingDistribution,
  },
  SUBMIT: {
    name: "submit",
    path: fullPath("/submit"),
    component: Submit,
  },
};
