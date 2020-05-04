export const orgProfileValidationConstraints = {
  id: { presence: { allowEmpty: false } },
  name: { presence: { allowEmpty: false } },
  website: { validURL: true },
  shortDescription: { presence: { allowEmpty: false } },
  longDescription: { presence: { allowEmpty: false } },
  "assets.heroImage.url": { presence: { allowEmpty: false, message: "^Image cannot be empty" } },
};

export const contactConstraints = {
  email: {
    email: {
      message: value => `${value} is not a valid email`,
    },
    presence: { allowEmpty: true },
  },
  phone: { presence: { allowEmpty: true } },
};

export const errorMsg = {
  IMAGE_NOT_FOUND: "Please upload an image to proceed",
};
