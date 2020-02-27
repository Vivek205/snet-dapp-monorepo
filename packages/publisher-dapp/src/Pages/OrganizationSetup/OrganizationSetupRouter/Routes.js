import OrganizationProfile from "../OrganizationProfile";
import Region from "../Region";
import PublishToBlockchain from "../PublishToBlockchain";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import Default from "../_default";

const basePath = GlobalRoutes.ORGANIZATION_SETUP.path;

const fullPath = path => `${basePath}${path}`;
const matchRegexPattern = path => {
  const patternString = `org\\/[^]*\\/setup\\${path}`;
  return new RegExp(patternString, "gi");
};

export const OrganizationSetupRoutes = {
  DEFAULT_PAGE: {
    name: "default",
    path: fullPath("/"),
    exact: true,
    component: Default,
  },
  ORGANIZATION_PROFILE: {
    name: "organizationprofile",
    path: fullPath("/profile"),
    component: OrganizationProfile,
    match: matchRegexPattern("/profile"),
  },
  REGION: {
    name: "region",
    path: fullPath("/region"),
    component: Region,
    match: matchRegexPattern("/region"),
  },
  PUBLISH_TO_BLOCKCHAIN: {
    name: "publishtoblockchain",
    path: fullPath("/publish"),
    component: PublishToBlockchain,
    match: matchRegexPattern("/publish"),
  },
};
