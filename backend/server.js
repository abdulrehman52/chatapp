import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectDB from './db/connectDB.js';

const app =express();
dotenv.config();
const port =process.env.PORT || 5000;


// app.get('/', (req,res)=>res.send("All OK!🤘🏻"))
app.use(express.json()); //to parse the incomming data with json payload (from req.body)
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use ('/api/messages',messageRoutes)
app.use('/api/users', userRoutes)

app.listen( port ,()=> {
    connectDB();
    console.log(`Server Running on port ${port}`)

})