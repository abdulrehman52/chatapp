import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";
import genToken_Cookie from '../utils/generateToken.js'

export const signup = async(req, res) => {
    try {
        const { fullname , username , password , cPassword , gender }= req.body;

        if(password!== cPassword){
            return res.status(400).json({error:"passwords donot match!" })
        }
        const user = await User.findOne({username});
        if (user) {
        return res.status(400).json({error:"Username exists!"})
        }

        //Hashing passwords here....

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt)

        const boydp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girldp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser= new User({
    fullname,
    username,
    password : hashpassword,
    gender,
    dp: gender==="male" ? boydp  :  girldp
    }) 
    if(newUser){
        // Generate jwt token here..

        genToken_Cookie(newUser._id,res)


        await newUser.save()
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            dp: newUser.dp
        }) 
    }else {
        res.status(400).json({Error: "Invalid user data!"})
    }


} catch (error) {
    console.log("error in signup controller     ", error.message)
    res.status(500).json({error: "Internal Server Error!"})
}
}
export const login =async(req,res) =>{
    try {
        
        const {username,password}= req.body
        const user= await User.findOne({username})
        const isPassword = await bcrypt.compare(password, user?.password ||"")

        if (! user || ! isPassword){
            res.status(400).json({error:"Invalid username or password.."})
        }
        genToken_Cookie(user._id,res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username :user.username,
            dp: user.dp
        })

    } catch (error) {
        console.log("error in login controller     ", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}
export const logout=(req,res) =>{
 try {
    res.cookie("jwt","",{maxAge :0 })
    res.status(200).json({message:"Loged out Successfully !!!"})
 } catch (error) {
     console.log("error in logOut controller     ", error.message)
     res.status(500).json({ error: "Internal Server Error!" })
    
 }
}