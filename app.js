const express=require('express');
const morgan=require('morgan');
const cors=require('cors');

PORT=3008;
require('./db/connection')
const LoginRoutes =require('./Routes/loginRoute')
const app=express();
app.use(morgan('dev'));
app.use(cors());
app.use('/api',LoginRoutes)






app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})











