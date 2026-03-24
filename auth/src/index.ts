import express from 'express';
import bodyParser from 'body-parser'; 

const app = express();

app.use(bodyParser.json());
app.get('/api/users/currentuser',(req,res)=>{
    res.send('Hi there, this is auth service');
})

app.listen(3000, () => {
    console.log('Service is running on port 3000*****');
});