import Entity from "../Entity";
import TNC from "../TNC";
import Authenticate from "../Authenticate";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import Default from "../_default";

const basePath = GlobalRoutes.ONBOARDING.path;

const fullPath = path => `${basePath}${path}`;

export const OnboardingRoutes = {
  DEFAULT_PAGE:{
    name: "default",
    path: fullPath("/"),
    exact:true,
    component: Default
  },
  ENTITY: {
    name: "entity",
    path: fullPath("/entity"),
    component: Entity,
  },
  TNC: {
    name: "tnc",
    path: fullPath("/tnc"),
    component: TNC ,
  },
  AUTHENTICATE: {
    name: "authenticate",
    path: fullPath("/authenticate"),
    component: Authenticate ,
  },
};
