export class AppError extends Error {
  constructor(
    public override message: string,
    public statusCode: number = 500,
    public code: string = "INTERNAL_ERROR"
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function handleApiError(
  error: unknown
): { message: string; statusCode: number } {
  if (error instanceof AppError) {
    return { message: error.message, statusCode: error.statusCode };
  }
  if (error instanceof Error) {
    return { message: error.message, statusCode: 500 };
  }
  return { message: "An unexpected error occurred", statusCode: 500 };
}

export const HTTP_ERRORS = {
  BAD_REQUEST: new AppError("Bad request", 400, "BAD_REQUEST"),
  UNAUTHORIZED: new AppError("Unauthorized", 401, "UNAUTHORIZED"),
  FORBIDDEN: new AppError("Forbidden", 403, "FORBIDDEN"),
  NOT_FOUND: new AppError("Not found", 404, "NOT_FOUND"),
  TOO_MANY_REQUESTS: new AppError("Too many requests", 429, "RATE_LIMITED"),
} as const;
