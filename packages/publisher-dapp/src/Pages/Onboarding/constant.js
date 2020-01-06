export const onboardingSections = {
  ENTITY: { key: 1, heading: { title: "entity", description: "entity" } },
  TNC: { key: 2, heading: { title: "terms of use", description: "terms of use" } },
  AUTHENTICATE: { key: 3, heading: { title: "authenticate", description: "authenticate" } },
};

export const progressText = ["entity", "terms of use", "authenticate"];

export const verificationStatuses = {
    NOT_STARTED: "NOT_STARTED",
    SELECTED_ENTITY: "SELECTED_ENTITY",
    ACCEPTED_TNC:"ACCEPTED_TNC",
    VERIFICATION_PENDING:"VERIFICATION_PENDING"
}