export const progressStatus = {
  PENDING: "PENDING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  NOT_COMPLETED: "",
};

export const progressStages = [
  {
    progressText: "AI Service Profile",
    status: progressStatus.NOT_COMPLETED,
    key: 1,
  },
  {
    status: progressStatus.NOT_COMPLETED,
    progressText: "Setup Demo",
    key: 2,
  },
  {
    status: progressStatus.NOT_COMPLETED,
    progressText: "Pricing & Distribution",
    key: 3,
  },
  {
    status: progressStatus.NOT_COMPLETED,
    progressText: "Launch",
    key: 4,
  },
];

export const serviceCreationSections = {
  PROFILE: {
    key: 1,
    heading: {
      title: "Create Your AI Service Profile",
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
      title: "Launch service",
      description: "You have completed the required steps for submission",
    },
  },
};

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
