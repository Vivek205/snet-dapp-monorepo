export const orgSetupFormConstraints = {
  id: { presence: { allowEmpty: false } },
  name: { presence: { allowEmpty: false } },
  website: { url: true },
  shortDescription: { presence: { allowEmpty: false } },
  longDescription: { presence: { allowEmpty: false } },
  contacts: {
    array: {
      email: { presence: { allowEmpty: false } },
      phone: { presence: { allowEmpty: false } },
    },
  },
};
