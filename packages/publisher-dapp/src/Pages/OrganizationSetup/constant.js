import { OrganizationSetupRoutes } from "./OrganizationSetupRouter/Routes";

export const organizationSetupSections = {
  ORGANIZATION_PROFILE: {
    key: 1,
    heading: {
      title: "Organization Setup",
      description: "Users will see your organization profile information for all active AI services published",
    },
    route: OrganizationSetupRoutes.ORGANIZATION_PROFILE,
  },
  REGION: {
    key: 2,
    heading: {
      title: "Organization Setup",
      description: "You can configure how all AI services are optimized by regions",
    },
    route: OrganizationSetupRoutes.REGION,
  },
  PUBLISH_TO_BLOCKCHAIN: {
    key: 3,
    heading: { title: "Organization Setup", description: "The final step will publish your company to the blockchain" },
    route: OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN,
  },
};

export const progressText = ["Organization Profile", "Regional Group Configuration", "Publish To Blockchain"];
