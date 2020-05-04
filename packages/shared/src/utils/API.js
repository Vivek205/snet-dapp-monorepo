export const responseStatus = {
  SUCCESS: "success",
};

export const httpStatus = {
  SUCCESS: 200,
};

export class APIError extends Error {
  constructor(message) {
    super(message);
    this.name = "APIError";
  }
}
