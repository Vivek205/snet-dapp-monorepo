export const servicePricingValidationConstraints = {
  price: { presence: { allowEmpty: false } },
  freeCallsAllowed: { presence: { allowEmpty: false } },
  endpoints: { presence: { allowEmpty: false } },
};
