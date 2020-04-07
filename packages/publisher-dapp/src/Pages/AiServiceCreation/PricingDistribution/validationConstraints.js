export const servicePricingValidationConstraints = {
  price: { presence: { allowEmpty: false } },
  freeCallsAllowed: { presence: { allowEmpty: false }, numericality: { greaterThan: 0 } },
  endpoints: { presence: { allowEmpty: false } },
  website: { url: { schemes: ["https"] } },
  "assets.protoFiles.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload the proto file of the service",
    },
  },
};
