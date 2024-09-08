import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import multipart from 'connect-multiparty';


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js';

import connectDB from './db/connectDB.js';


dotenv.config();
const port =process.env.PORT || 5000;

// app.get('/', (req,res)=>res.send("All OK!🤘🏻"))
//to parse the incomming data with json payload (from req.body)
app.use(multipart());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use ('/api/messages',messageRoutes)
app.use('/api/users', userRoutes)

server.listen( port ,()=> {
    connectDB();    
    console.log(`Server Running on port ${port}`)

})