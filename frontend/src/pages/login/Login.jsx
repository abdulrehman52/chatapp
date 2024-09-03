import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='p-6 w-full rounded-lg  shadow-md bg-pink-200 bg-clip-padding backdrop-filter backdrop-lg backdrop-opacity-0'>
            <h1 className='text-center text-3xl font-semibold text-red-600'>
                Login
                <span className='text-purple-500'> Chat App</span>
            </h1>
            <form >
                <div>
                    <label className='label p-4'></label>
                    <span className='text-base label-text'>Username</span>
                      <input
                          type="text"
                          placeholder="Username here"
                          className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text '>Password</span>
                    </label>
                      <input
                          type="password"
                          placeholder="Password here"
                          className="input input-bordered input-primary w-full max-w-xs" />
                  </div>
                  <button className="btn btn-link">Don't have an account?</button>

                  <div> 
                <button className="btn btn-primary btn-block text-lg" type="submit">Login</button>
                  </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
