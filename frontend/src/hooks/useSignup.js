import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext"

const useSignup = async() =>{
    const [loading,setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const signup = async({fullname,username,password,conformPassword,gender})=>{
        const success = handleInputErrors({ fullname, username, password, conformPassword, gender })

        if(!success) return ;
    }
    setLoading(true)
    try {
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({ fullname, username, password, conformPassword, gender })

        })

        const data = await res.json();
        if (data.error){
            throw new Error(data.error)
        }
// local storage 

localStorage.setItem("chat-user",JSON.stringify(data))
// context
setAuthUser(data)

    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }

    return { loading, signup }
}
export default useSignup;


function handleInputErrors({ fullname, username, password, conformPassword, gender }){
    if (!fullname || !username || !password || !conformPassword || !gender){
        toast.error("Fill All Fields")
    return false
    }

    if(password===conformPassword){
        toast.error("Passwords do not match ..!")
        return false
    }
    if(password.length < 6){
        toast.error("Password should be atleast 6 characters")
        return false
    }
    return true;
}