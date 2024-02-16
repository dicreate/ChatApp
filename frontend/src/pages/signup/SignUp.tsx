import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup';
import { SignupData } from '../../models/auth.models';

const SignUp: React.FC = () => {
   const [inputs, setInputs] = useState<SignupData>({
      fullname: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: ''
   })

   const { loading, signup } = useSignup()

   const handleCheckboxChange = (gender: string) => {
      setInputs({ ...inputs, gender })
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await signup(inputs)
   }


   return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
               Sign Up <span className='text-blue-500'>Chat App</span>
            </h1>

            <form onSubmit={handleSubmit}>
               <div >
                  <label className='label p-2'>
                     <span className='text-base label-text text-gray-300'>Fullname</span>
                  </label>
                  <input
                     type="text"
                     placeholder='John Doe'
                     className='w-full input input-bordered h-10'
                     value={inputs.fullname}
                     onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                  />
               </div>

               <div >
                  <label className='label p-2'>
                     <span className='text-base label-text text-gray-300'>Username</span>
                  </label>
                  <input
                     type="text"
                     placeholder='johndoe'
                     className='w-full input input-bordered h-10'
                     value={inputs.username}
                     onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
                     value={inputs.password}
                     onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                  />
               </div>

               <div>
                  <label className='label p-2'>
                     <span className='text-base label-text text-gray-300'>Confirm Password</span>
                  </label>
                  <input
                     type="password"
                     placeholder='Confirm Password'
                     className='w-full input input-bordered h-10'
                     value={inputs.confirmPassword}
                     onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                  />
               </div>

               <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

               <Link to="/login" className='text-sm hover:underline text-gray-300 hover:text-blue-200 mt-2 inline-block'>
                  Already have an account?
               </Link>

               <div>
                  <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                     {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default SignUp