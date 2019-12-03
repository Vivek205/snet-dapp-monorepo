import { lazy } from "react";
import withLightHeader from "../HOC/withLightHeader";

const Enroll = lazy(() => import("../Pages/Enroll"));
const GetStarted = lazy(() => import("../Pages/GetStarted"));

const EnrollComponent = withLightHeader(Enroll);
const GetStartedComponent = withLightHeader(GetStarted);

export const GlobalRoutes = {
  LOGIN: {
    name: "login",
    path: "/login",
    component: "",
  },
  SIGNUP: {
    name: "signup",
    path: "/signup",
    component: "",
  },
  OVERVIEW: {
    name: "overview",
    path: "/overview",
    component: "",
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
