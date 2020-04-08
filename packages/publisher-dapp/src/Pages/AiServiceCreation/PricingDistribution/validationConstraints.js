export const servicePricingValidationConstraints = {
  website: { url: { schemes: ["https"] } },
  "assets.protoFiles.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload the proto file of the service",
    },
  },
  groups: {
    array: {
      endpoints: { presence: { allowEmpty: false, message: "^Endpoints cannot be blank" } },
      freeCallsAllowed: {
        presence: { allowEmpty: false, numericality: { greaterThan: 0 }, message: "^freeCallsAllowed cannot be blank" },
      },
      testEndpoints: { presence: { allowEmpty: false, message: "^Test Endpoints cannot be blank" } },
      pricing: {
        array: {
          priceInCogs: { presence: { allowEmpty: false, message: "^Service Price cannot be blank" } },
        },
      },
    },
  },
};
