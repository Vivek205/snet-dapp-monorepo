export const submitServiceConstraints = {
  name: { presence: { allowEmpty: false } },
  id: { presence: { allowEmpty: true } },
  shortDescription: { presence: { allowEmpty: false } },
  longDescription: { presence: { allowEmpty: false } },
  contributors: { presence: { allowEmpty: false, message: "^Please provide the contributors details of the service" } },
  tags: { presence: { allowEmpty: false, message: "^Please provide the tags for the service" } },
  "assets.heroImage.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload an image for the service",
    },
  },
  "assets.protoFiles.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload the proto file of the service",
    },
  },
  "assets.demoFiles.url": {
    presence: {
      allowEmpty: false,
      message: "^Please upload the UI components of the service",
    },
  },
  groups: {
    array: {
      name: { presence: { allowEmpty: false, message: "^Please enter group details" } },
      id: { presence: { allowEmpty: false, message: "^Please enter group details" } },
    },
  },
};
