import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessage = async(req,res)=>{
   try {
    
    const {message} = req.body;
    const {id: receiverId } = req.params
    const senderId =req.user._id

    let conversation= await Conversation.findOne({
        $all :[senderId,receiverId]
    })
    if(!conversation){
        conversation = await Conversation.create({
            participents:[senderId,receiverId]
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })
    if (newMessage){
        conversation.messages.push(newMessage._id)
    } 
    // to run conversation.save and message .save parallel
    
    Promise.all([conversation.save(),newMessage.save()])
    
    // Socket.io functionality goes here...
    const receiverSocketId =getReceiverSocketId(receiverId)
    if (receiverSocketId){
        //io.to(<socketId>).emit() used to send events to specific clients
        io.to(receiverSocketId).emit("newMessage",newMessage)
    }


    res.status(201).json({newMessage})
   } catch (error) {
    console.log("Error in sendMessage controller:",error.message);
    res.status(500).json({error:"Internal Server Error!!"})
   }
}

export  const getMessage = async(req,res)=>{
    try {

        const {id:userToChatId}= req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participents:{$all : [senderId,userToChatId]}
        }).populate("messages") // not ref. but actual messages

        if(!conversation)
            return res.status(200).json([])
        const messages = conversation.messages

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessage controller:", error.message);
        res.status(500).json({ error: "Internal Server Error!!" })
    }
}