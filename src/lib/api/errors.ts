import { ApiError } from "./client";

export function getErrorMessage(err: unknown): string {
  if (err instanceof ApiError) {
    return err.message || "Something went wrong. Please try again.";
  }

  if (err instanceof TypeError) {
    return "Unable to reach the server. Please check your connection and try again.";
  }

  if (err instanceof Error && err.message) {
    return err.message;
  }

  return "Something went wrong. Please try again.";
}
