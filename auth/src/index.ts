import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose  from 'mongoose';
import cookieSession from 'cookie-session';


import { currentUserRouter } from './routes/current-user.ts';
import { signinRouter } from './routes/signin.ts';
import { signoutRouter } from './routes/signout.ts';
import { signupRouter } from './routes/signup.ts';
import { errorHandler } from './middlewares/error-handler.ts';
import { NotFoundError } from './errors/not-found-error.ts';    


const app = express();
app.set('trust proxy', true);   

app.use(bodyParser.json());
app.use(cookieSession({
        signed: false,
        secure: false
    })
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(async(req,res,next)=>{
    next(new NotFoundError());
})

app.use(errorHandler);

const start= async()=>{
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defined');
    }
    try{
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth');
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
    }
}

app.listen(3000, () => {
    console.log('Service is running on port 3000*****');
});

start();