import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='p-6 w-full rounded-lg  shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-lg backdrop-opacity-0'>
            <h1 className='text-center text-4xl font-semibold text-blue-400'>
                Login
                <span className='text-red-400 pl-1'>Chat App</span>
            </h1>
        <form onSubmit={handleSubmit} >
                <div>
                    <label className='label p-4'></label>
                    <span className='text-base label-text text-gray-600  p-2'>Username</span>
                      <input
                          type="text"
                          placeholder="Username here"
                          className="input input-bordered input-primary w-full max-w-xs bg-inherit text-gray-600 "
                          value={username}
                          onChange={(e)=> setUsername(e.target.value) }
                      />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base text-gray-600 label-text '>Password</span>
                    </label>
                      <input
                          type="password"
                          placeholder="Password here"
                          className="input input-bordered input-primary w-full max-w-xs bg-inherit"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                        />
                  </div>

                  <Link to={'/signup'} className='mt-4 mb-2 text-sm hover:underline hover:text-blue-600 inline-block text-gray-600'>Don't have an account?</Link>

                  <div> 
                <button className="btn btn-primary btn-block text-lg" type="submit" disabled={loading}>
                  {loading ? <span className='loading loading-spinner'/> : "Login" }
                </button>
                  </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
