import { lazy } from "react";
import withLightHeaderAndFooter from "../HOC/withLightHeaderAndFooter";

const Enroll = lazy(() => import("../Pages/Enroll"));
const GetStarted = lazy(() => import("../Pages/GetStarted"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const SignupConfirm = lazy(() => import("../Pages/SignupConfirm"));
const Overview = lazy(() => import("../Pages/Overview"));
const Onboarding = lazy(() => import("../Pages/Onboarding"));

const EnrollComponent = withLightHeaderAndFooter(Enroll);
const GetStartedComponent = withLightHeaderAndFooter(GetStarted);
const LoginComponent = withLightHeaderAndFooter(Login);
const SignupComponent = withLightHeaderAndFooter(Signup);
const SingupConfirmComponent = withLightHeaderAndFooter(SignupConfirm);
const OverviewComponent = withLightHeaderAndFooter(Overview);
const OnboardingComponent = withLightHeaderAndFooter(Onboarding);

export const GlobalRoutes = {
  LOGIN: {
    name: "login",
    path: "/login",
    component: LoginComponent,
  },
  SIGNUP: {
    name: "signup",
    path: "/signup",
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
  GET_STARTED: {
    name: "get started",
    path: "/getstarted",
    component: GetStartedComponent,
  },
  ONBOARDING: {
    name: "onboarding",
    basePath: "/onboarding",
    path: "/onboarding/:step",
    component: OnboardingComponent,
  },
};
