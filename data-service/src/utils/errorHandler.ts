import { Request, Response, NextFunction } from "express";

interface HttpError extends Error {
  status: number;
}

export const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    next(err);
    return;
  }
  const { status } = err;
  res.status(status).json({ errors: [{ ...err, message: err.message }] });
};
