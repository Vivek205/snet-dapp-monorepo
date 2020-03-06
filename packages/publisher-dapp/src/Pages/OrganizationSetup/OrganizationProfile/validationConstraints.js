export const orgProfileValidationConstraints = {
  id: { presence: { allowEmpty: false } },
  name: { presence: { allowEmpty: false } },
  website: { url: true },
  shortDescription: { presence: { allowEmpty: false } },
  longDescription: { presence: { allowEmpty: false } },
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
