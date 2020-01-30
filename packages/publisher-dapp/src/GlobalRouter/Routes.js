import { lazy } from "react";
import withLightHeaderAndFooter from "../HOC/withLightHeaderAndFooter";
import withRegistrationHeader from "../HOC/withRegistrationHeader";
import withDashboardMenu from "../HOC/withDashboardMenu";

const Enroll = lazy(() => import("../Pages/Enroll"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const Overview = lazy(() => import("../Pages/Overview"));
const HowItWorks = lazy(() => import("../Pages/HowItWorks"));
const SignupConfirm = lazy(() => import("../Pages/SignupConfirm"));
const Onboarding = lazy(() => import("../Pages/Onboarding"));
const OrganizationSetup = lazy(() => import("../Pages/OrganizationSetup"));
const OrgSetupStatus = lazy(() => import("../Pages/OrgSetupStatus"));
const TeamMembers = lazy(() => import("../Pages/TeamMembers"));
const AiServices = lazy(() => import("../Pages/AiServices"));

const SIGNUP_PATH = "/signup";
const LOGIN_PATH = "/login";

const EnrollComponent = withLightHeaderAndFooter(Enroll);
const LoginComponent = withRegistrationHeader(Login, "New to SingularityNET?", "Sign up", SIGNUP_PATH);
const SignupComponent = withRegistrationHeader(Signup, "Already have an account?", "Login", LOGIN_PATH);
const SingupConfirmComponent = withRegistrationHeader(SignupConfirm, "Already have an account?", "Login", LOGIN_PATH);
const OverviewComponent = withLightHeaderAndFooter(Overview);
const HowItWorksComponent = withLightHeaderAndFooter(HowItWorks);
const OnboardingComponent = withLightHeaderAndFooter(Onboarding);
const OrganizationsetupComponent = withLightHeaderAndFooter(OrganizationSetup);
const OrgSetupStatusComponent = withLightHeaderAndFooter(OrgSetupStatus);
const TeamMembersComponent = withLightHeaderAndFooter(TeamMembers);
const AiServicesComponent = withDashboardMenu(AiServices);

export const GlobalRoutes = {
  LOGIN: {
    name: "login",
    path: LOGIN_PATH,
    component: LoginComponent,
  },
  SIGNUP: {
    name: "signup",
    path: SIGNUP_PATH,
    component: SignupComponent,
  },
  SIGNUP_CONFIRM: {
    name: "signup confirm",
    path: "/signupconfirmation",
    component: SingupConfirmComponent,
  },
  OVERVIEW: {
    name: "overview",
    path: "/overview",
    component: OverviewComponent,
  },
  ENROLL: {
    name: "enroll",
    path: "/enroll",
    component: EnrollComponent,
  },
  HOW_IT_WORKS: {
    name: "how it works",
    path: "/howitworks",
    component: HowItWorksComponent,
  },
  ONBOARDING: {
    name: "onboarding",
    path: "/onboarding",
    component: OnboardingComponent,
  },
  ORGANIZATION_SETUP: {
    name: "organizationsetup",
    path: "/organizationsetup",
    component: OrganizationsetupComponent,
  },
  ORG_SETUP_STATUS: {
    name: "organization setup",
    path: "/orgsetupstatus",
    component: OrgSetupStatusComponent,
  },
  INVITE_MEMBERS: {
    name: "team memebrs",
    path: "/invitemembers",
    component: TeamMembersComponent,
  },
  SERVICES: {
    name: "services",
    path: "/services",
    component: AiServicesComponent,
  },
};

export const setupRouteAuthentications = state => ({
  ...GlobalRoutes,
  ORGANIZATION_SETUP: {
    ...GlobalRoutes.ORGANIZATION_SETUP,
    isAllowed: state.user.isLoggedIn,
    redirectTo: GlobalRoutes.LOGIN.path,
  },
  ORG_SETUP_STATUS: {
    ...GlobalRoutes.ORG_SETUP_STATUS,
    isAllowed: state.user.isLoggedIn,
    redirectTo: GlobalRoutes.LOGIN.path,
  },
  INVITE_MEMBERS: {
    ...GlobalRoutes.INVITE_MEMBERS,
    isAllowed: state.user.isLoggedIn,
    redirectTo: GlobalRoutes.LOGIN.path,
  },
});
