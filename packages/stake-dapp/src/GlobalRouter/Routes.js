import { lazy } from "react";
import withLightHeaderAndFooter from "../HOC/withLightHeaderAndFooter";
import withRegistrationHeader from "../HOC/withRegistrationHeader";

const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const Overview = lazy(() => import("../Pages/Overview"));
const HowItWorks = lazy(() => import("../Pages/HowItWorks"));
const SignupConfirm = lazy(() => import("../Pages/SignupConfirm"));
const Onboarding = lazy(() => import("../Pages/Onboarding"));

const Landing = lazy(() => import("../Pages/Landing"));

const SIGNUP_PATH = "/signup";
const LOGIN_PATH = "/login";

const LoginComponent = withRegistrationHeader(Login, "New to SingularityNET?", "Sign up", SIGNUP_PATH);
const SignupComponent = withRegistrationHeader(Signup, "Already have an account?", "Login", LOGIN_PATH);
const SingupConfirmComponent = withRegistrationHeader(SignupConfirm, "Already have an account?", "Login", LOGIN_PATH);
const OverviewComponent = withLightHeaderAndFooter(Overview);
const HowItWorksComponent = withLightHeaderAndFooter(HowItWorks);
const OnboardingComponent = withLightHeaderAndFooter(Onboarding);

const LandingComponent = withLightHeaderAndFooter(Landing);

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
  LANDING: {
    name: "landing",
    path: "/landing",
    component: LandingComponent,
  },
};

export const setupRouteAuthentications = _state => ({
  ...GlobalRoutes,
  // ORGANIZATION_SETUP: {
  //   ...GlobalRoutes.ORGANIZATION_SETUP,
  //   isAllowed: state.user.isLoggedIn,
  //   redirectTo: GlobalRoutes.LOGIN.path,
  // },
  // ORG_SETUP_STATUS: {
  //   ...GlobalRoutes.ORG_SETUP_STATUS,
  //   isAllowed: state.user.isLoggedIn,
  //   redirectTo: GlobalRoutes.LOGIN.path,
  // },
  // INVITE_MEMBERS: {
  //   ...GlobalRoutes.INVITE_MEMBERS,
  //   isAllowed: state.user.isLoggedIn,
  //   redirectTo: GlobalRoutes.LOGIN.path,
  // },
  // AI_SERVICE_CREATION: {
  //   ...GlobalRoutes.AI_SERVICE_CREATION,
  //   isAllowed: state.user.isLoggedIn,
  //   redirectTo: GlobalRoutes.LOGIN.path,
  // },
});
