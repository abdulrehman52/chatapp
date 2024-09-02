import mongoose from 'mongoose';

const connectDB = async() =>{try {
    await mongoose.connect(process.env.DB_URI)
    console.log("Connected to mongo db")
} catch (error) {
    console.log("ERROR : Connecting mongodb",error.message);
}}

export default connectDB;