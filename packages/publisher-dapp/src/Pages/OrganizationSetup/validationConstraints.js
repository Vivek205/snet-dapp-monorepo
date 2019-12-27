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
  "assets.heroImage.raw": {
    presence: { allowEmpty: false, message: "Please upload a hero image for the organization", fullMessages: false },
  },
  "assets.heroImage.fileType": {
    presence: { allowEmpty: false, message: "Please upload a hero image for the organization", fullMessages: false },
  },
};
