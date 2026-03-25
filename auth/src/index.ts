import express from 'express';
import bodyParser from 'body-parser'; 

import { currentUserRouter } from './routes/current-user.ts';
import { signinRouter } from './routes/signin.ts';
import { signoutRouter } from './routes/signout.ts';
import { signupRouter } from './routes/signup.ts';
import { errorHandler } from './middlewares/error-handler.ts';
import { NotFoundError } from './errors/not-found-error.ts';    


const app = express();

app.use(bodyParser.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(async(req,res,next)=>{
    next(new NotFoundError());
})

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Service is running on port 3000*****');
});