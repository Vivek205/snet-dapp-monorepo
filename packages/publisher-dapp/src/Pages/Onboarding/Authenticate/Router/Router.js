import Organization from "../Organization";

const basePath = "/onboarding/authenticate";

const fullPath = path => `${basePath}${path}`;

export const AuthenticateIdRoutes = {
  ORGANIZATION: {
    name: "organization",
    path: fullPath("/organization"),
    component: Organization,
  },
};
