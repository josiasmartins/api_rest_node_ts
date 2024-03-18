import { NextFunction, Request, Response } from "express";
import { APiError } from "../helpers/api-error";
import { stat } from "fs";

export const errorMiddleware = (
    error: Error & Partial<APiError>, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal Server Error';

    return res.status(statusCode).json({ message, statusCode })
}