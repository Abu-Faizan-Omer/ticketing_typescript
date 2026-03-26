import  express from "express";
import { body  } from "express-validator";
import {validateRequest} from '../middlewares/validate-request.ts';
import { User } from "../models/user.ts";
import type { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error.ts";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signup',[
    body('email')
    .isEmail()
    .withMessage('Email must be valid'),

    body('password')
    .trim()
    .isLength({min:4,max:20})
    .withMessage('Password must be between 4 and 20 characters')
],
validateRequest,
async(req:Request, res:Response)=>{

    const {email,password} = req.body;
    const existingUser = await User.findOne({email});

    if(existingUser){
    //    console.log('Email in Use')
    //    res.send({})
         throw new BadRequestError('Email in Use');
    }

    const user = User.build({email,password});
    await user.save();

    //generate jwt
    const userJwt = jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_KEY!);

    //store it on session object
    req.session = {
        jwt:userJwt
    }

    res.status(201).send(user);

})

export {router as signupRouter};