import { lazy } from "react";
import withLightHeaderAndFooter from "../HOC/withLightHeaderAndFooter";

const Enroll = lazy(() => import("../Pages/Enroll"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));
const Overview = lazy(() => import("../Pages/Overview"));
const HowItWorks = lazy(() => import("../Pages/HowItWorks"));
const SignupConfirm = lazy(() => import("../Pages/SignupConfirm"));
const Onboarding = lazy(() => import("../Pages/Onboarding"));
const OrganizationSetup = lazy(() => import("../Pages/OrganizationSetup"));

const EnrollComponent = withLightHeaderAndFooter(Enroll);
const LoginComponent = withLightHeaderAndFooter(Login);
const SignupComponent = withLightHeaderAndFooter(Signup);
const SingupConfirmComponent = withLightHeaderAndFooter(SignupConfirm);
const OverviewComponent = withLightHeaderAndFooter(Overview);
const HowItWorksComponent = withLightHeaderAndFooter(HowItWorks);
const OnboardingComponent = withLightHeaderAndFooter(Onboarding);
const OrganizationsetupComponent = withLightHeaderAndFooter(OrganizationSetup);

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
  HOW_IT_WORKS: {
    name: "how it works",
    path: "/howitworks",
    component: HowItWorksComponent,
  },
  ONBOARDING: {
    name: "onboarding",
    basePath: "/onboarding",
    path: "/onboarding",
    component: OnboardingComponent,
  },
  ORGANIZATION_SETUP: {
    name: "organizationsetup",
    basePath: "/organizationsetup",
    path: "/organizationsetup",
    component: OrganizationsetupComponent,
  },
};
