export const serviceProfileValidationConstraints = {
  name: { presence: { allowEmpty: false } },
  id: { presence: { allowEmpty: false } },
  shortDescription: { presence: { allowEmpty: false } },
  longDescription: { presence: { allowEmpty: false } },
  tags: { presence: { allowEmpty: false, message: "^Please provide the tags for the service" } },
  projectURL: { validURL: true },
  contributors: { presence: { allowEmpty: false, message: "^Please provide the contributors details of the service" } },
  "assets.heroImage.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload an image for the service",
    },
  },
};
