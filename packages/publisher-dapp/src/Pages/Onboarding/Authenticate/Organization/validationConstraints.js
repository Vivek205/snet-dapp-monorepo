export const orgOnboardingConstraints = {
  id: {
    presence: { allowEmpty: false },
    format: {
      pattern: "[_a-z0-9]+",
      flags: "i",
      message: "Invalid characters in ogranization id",
    },
  },
  name: { presence: { allowEmpty: false } },
};
