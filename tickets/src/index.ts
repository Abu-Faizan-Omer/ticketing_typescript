import express from 'express';
import mongoose  from 'mongoose';
import cookieSession from 'cookie-session';

import { createTicketRouter } from './routes/new.ts';
import  { showTicketRouter } from './routes/show.ts'
import {indexTicketRouter} from './routes/index.ts';
import { updateTicketRouter } from './routes/update.ts';    


import { errorHandler, NotFoundError, currentUser } from "@afotickets/common";
   



const app = express();
app.set('trust proxy', true);   

app.use(express.json());
app.use(cookieSession({
        signed: false,
        secure: false
    })
)

app.use(currentUser);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);



app.use(async(req,res,next)=>{
    next(new NotFoundError());
})
app.use(errorHandler);



const start= async()=>{
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defined');
    }
    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined');
    }
    try{
        await mongoose.connect(process.env.MONGO_URI);
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