export const serviceProfileValidationConstraints = {
  serviceName: { presence: { allowEmpty: false } },
  serviceId: { presence: { allowEmpty: false } },
  website: { url: true },
};
