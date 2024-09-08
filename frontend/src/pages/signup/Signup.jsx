import { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import GenderCheckBox from './GenderCheckBox'

function Signup() {
  const [input,setinput] = useState({
    fullname:"",
    username:"",
    password:"",
    cPassword:"",
    gender : ""
  })
  const {loading , signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };


  const handleSubmit = async(e) =>{
    e.preventDefault();
    await signup(input)
  }


  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='p-6 w-full rounded-lg  shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-lg backdrop-opacity-0'>
              <h1 className='text-center text-4xl font-semibold text-blue-400 items-center'>
                  SignUp
                  <span className='text-red-400 pl-1'>Chat App</span>
              </h1>
       <form  onSubmit={handleSubmit}>
        <label className='label p-2 '>Full Name:</label>
        <input className="input input-bordered input-primary w-full max-w-xs bg-inherit"
          type="text"  
          value={input.fullname}
          onChange={(e)=> setinput({...input,fullname: e.target.value})}
        />

        <label className='label p-2'>Username:</label>
          <input className="input input-bordered input-primary w-full max-w-xs bg-inherit" type="text" 
            value={input.username}
            onChange={(e) => setinput({ ...input, username: e.target.value })}
          />

        <label className='label p-2'>Password:</label>
          <input className="input input-bordered input-primary w-full max-w-xs bg-inherit"
            type="password"  
            value={input.password}
            onChange={(e) => setinput({ ...input, password: e.target.value })}
          />

        <label className='label p-2'>Confirm Password:</label>
          <input type="password" 
            className="input input-bordered input-primary w-full max-w-xs bg-inherit"
            value={input.cPassword}
            onChange={(e) => setinput({ ...input, cPassword: e.target.value })}  
          />
          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />
         <div className='m-4'>
          <Link to={'/login'} className=" text-sm hover:underline hover:text-blue-600 ">Already have an account?</Link>
         </div>
        <div>
        <button className="btn btn-primary btn-block text-lg " type="submit"
        disabled={loading}>
          {loading ? <span className=' loading loading-spinner'></span> : "Sign Up"}
        </button>
        </div>
      </form> 
      </div >
     </div>
  )
}

export default Signup