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
      pricing: {
        array: {
          priceInCogs: { presence: { allowEmpty: false, message: "^Service Price cannot be " } },
        },
      },
      endpoints: { presence: { allowEmpty: false, message: "^Endpoints cannot be blank" } },
      daemonAddresses: { presence: { allowEmpty: false, message: "^Daemon addresses cannot be blank" } },
      freeCallsAllowed: { presence: { allowEmpty: false, message: "^freeCallsAllowed cannot be blank" } },
      testEndpoints: { presence: { allowEmpty: false, message: "^Test Endpoints cannot be blank" } },
    },
  },
};
