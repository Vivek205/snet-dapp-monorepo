import { APIError } from "./API";
import ValidationError from "./validationError";

export const checkIfKnownError = error => error instanceof APIError || error instanceof ValidationError;
