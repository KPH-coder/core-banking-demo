import { Request, Response, NextFunction } from "express";

interface HttpError extends Error {
  status?: number;
}

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    next(err);
    return;
  }
  const status = err.status || 500;
  res.status(status).json({ errors: [{ message: err.message }] });
};
