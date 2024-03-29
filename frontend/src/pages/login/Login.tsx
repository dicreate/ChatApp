import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
   const [username, setUserName] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const { loading, login } = useLogin()

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      await login({ username, password })
   }

   return (
      <div className='flex flex-col items-center justify-center mx-auto max-w-96 w-full'>
         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
               Login <span className='text-blue-500'>Chat App</span>
            </h1>

            <form onSubmit={handleSubmit}>
               <div >
                  <label className='label p-2'>
                     <span className='text-base label-text text-gray-300'>Username</span>
                  </label>
                  <input
                     type="text"
                     placeholder='Enter username'
                     className='w-full input input-bordered h-10'
                     value={username}
                     onChange={(e) => setUserName(e.target.value)}
                  />
               </div>

               <div>
                  <label className='label p-2'>
                     <span className='text-base label-text text-gray-300'>Password</span>
                  </label>
                  <input
                     type="password"
                     placeholder='Enter Password'
                     className='w-full input input-bordered h-10'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>

               <Link to="/signup" className='text-sm hover:underline text-gray-300 hover:text-blue-200 mt-2 inline-block'>
                  {"Don't"} have an account?
               </Link>

               <div>
                  <button
                     className='btn btn-block btn-sm mt-2'
                     disabled={loading}
                  >
                     {loading ? <span className="loading loading-spinner"></span> : "Login"}
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login