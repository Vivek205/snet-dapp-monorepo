export const responseStatus = {
  SUCCESS: "success",
};

export class APIError extends Error {
  constructor(message) {
    super(message);
    this.name = "APIError";
  }
}
