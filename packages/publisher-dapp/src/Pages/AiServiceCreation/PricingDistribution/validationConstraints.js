export const servicePricingValidationConstraints = {
  price: { presence: { allowEmpty: false } },
  freeCallsAllowed: { presence: { allowEmpty: false }, numericality: { greaterThan: 0 } },
  endpoints: { presence: { allowEmpty: false } },
  website: { url: { schemes: ["https"] } },
};
