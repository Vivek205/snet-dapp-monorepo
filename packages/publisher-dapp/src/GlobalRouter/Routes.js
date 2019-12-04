import { lazy } from "react";
import withLightHeaderAndFooter from "../HOC/withLightHeaderAndFooter";

const Enroll = lazy(() => import("../Pages/Enroll"));
const GetStarted = lazy(() => import("../Pages/GetStarted"));
const Login = lazy(()=> import("../Pages/Login"));
const Signup = (()=> import("../Pages/Signup"));
const Overview = (() =>  import("../Pages/Overview"))

const EnrollComponent = withLightHeaderAndFooter(Enroll);
const GetStartedComponent = withLightHeaderAndFooter(GetStarted);
const LoginComponent = withLightHeaderAndFooter(Login);
const SignupComponent = withLightHeaderAndFooter(Signup);
const OverviewComponent = withLightHeaderAndFooter(Overview);

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
};
