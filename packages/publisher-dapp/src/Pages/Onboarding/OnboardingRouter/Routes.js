import Entity from "../Entity";
import TNC from "../TNC";
import Authenticate from "../Authenticate";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

const basePath = GlobalRoutes.ONBOARDING.basePath;

const fullPath = path => `${basePath}${path}`;

export const OnboardingRoutes = {
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
