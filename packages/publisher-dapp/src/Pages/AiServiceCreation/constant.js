export const progressStatus = {
  IDLE: "idle",
  ACTIVE: "active",
  COMPLETED: "completed",
  FAILED: "failed",
  SUCCEEDED: "succeeded",
  PENDING: "pending",
};

export const sections = {
  AI_PROFILE: "AI_PROFILE",
  SETUP_DEMO: "SETUP_DEMO",
  PRICING_AND_DISTRIBUTION: "PRICING_AND_DISTRIBUTION",
  LAUNCH: "LAUNCH",
};

export const progressStages = [
  {
    section: sections.AI_PROFILE,
    status: progressStatus.IDLE,
    key: 1,
  },
  {
    section: sections.SETUP_DEMO,
    status: progressStatus.IDLE,
    key: 2,
  },
  {
    section: sections.PRICING_AND_DISTRIBUTION,
    status: progressStatus.IDLE,
    key: 3,
  },
  {
    section: sections.LAUNCH,
    status: progressStatus.IDLE,
    key: 4,
  },
];

export const serviceCreationSections = {
  PROFILE: {
    key: 1,
    heading: {
      title: "AI Service Profile",
      description: "Input information about your service on the AI Marketplace",
    },
  },
  DEMO: {
    key: 2,
    heading: {
      title: "Setup Demo",
      description:
        "The AI Marketplace allows users to demo your AI service. You will need to set up the UI / UX demo experience for your service.",
    },
  },
  PRICING_AND_DISTRIBUTION: {
    key: 3,
    heading: {
      title: "Pricing & Distribution",
      description: "Now you will link to your AI service to the platform",
    },
  },
  LAUNCH: {
    key: 4,
    heading: {
      title: "",
      description: "",
    },
  },
};

export const progressText = [
  { title: "AI Service Profile", section: sections.AI_PROFILE },
  { title: "Setup Demo", section: sections.SETUP_DEMO },
  { title: "Pricing & Distribution", section: sections.PRICING_AND_DISTRIBUTION },
  { title: "Launch", section: sections.LAUNCH },
];

export const serviceCreationStatus = {
  NOT_STARTED: "",
  DRAFT: "DRAFT",
  APPROVAL_PENDING: "APPROVAL_PENDING",
  APPROVED: "APPROVED",
  CHANGE_REQUESTED: "CHANGE_REQUESTED",
  REJECTED: "REJECTED",
  BLOCKCHAIN_SUBMITTED: "BLOCKCHAIN_SUBMITTED",
  PUBLISH_IN_PROGRESS: "PUBLISH_IN_PROGRESS",
  PUBLISHED: "PUBLISHED",
};

export const serviceData = [
  {
    status: "Submitted For Review",
    feedback: "",
  },
];

export const serviceIdAvailability = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
};
