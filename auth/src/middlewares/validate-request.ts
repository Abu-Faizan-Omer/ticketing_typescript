import type { NextFunction } from "express";
import type { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error.ts';

export const validateRequest =(
    req:Request,
    res:Response,
    next:NextFunction
) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array());
    }
    next()
}

