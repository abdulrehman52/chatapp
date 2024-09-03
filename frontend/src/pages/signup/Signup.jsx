import React from 'react'


function Signup() {
  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='p-6 w-full rounded-lg  shadow-md bg-pink-200 bg-clip-padding backdrop-filter backdrop-lg backdrop-opacity-0'>
              <h1 className='text-center text-3xl font-semibold text-red-600'>
                  SignUp
                  <span className='text-purple-500'> Chat App</span>
              </h1>
       <form>
        <label className='label p-2'>Full Name:</label>
        <input className="input input-bordered input-primary w-full max-w-xs"
        type="text" />

        <label className='label p-2'>Username:</label>
        <input className="input input-bordered input-primary w-full max-w-xs" type="text" />

        <label className='label p-2'>Password:</label>
        <input className="input input-bordered input-primary w-full max-w-xs"
        type="password" />

        <label className='label p-2'>Confirm Password:</label>
        <input type="password" 
        className="input input-bordered input-primary w-full max-w-xs"/>
         <label className='label p-4 inline-block'>Gender:</label>
         <select required= "true">
           <option value="">Select</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
         </select>
        <div>
        <button className="btn btn-primary btn-block text-lg" type="submit">Sign Up</button>
        </div>
      </form> 
        <button className="btn btn-link">Already have an account?</button>
      </div >
     </div>
  )
}

export default Signup

   