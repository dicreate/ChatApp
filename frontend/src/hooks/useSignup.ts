import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { SignupData } from "../models/auth.models";

const useSignup = () => {
   const [loading, setLoading] = useState<boolean>(false);
   
   const {authUser, setAuthUser} = useAuthContext()

   const signup = async ({fullname, username, password, confirmPassword, gender}: SignupData) => {
      const success = handleInputErrors({fullname, username, password, confirmPassword, gender})
      if(!success) return;

      setLoading(true)

      try {
         const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({fullname, username, password, confirmPassword, gender})
         })

         const data = await res.json();

         if(data.error) {
            throw new Error(data.error)
         }
         localStorage.setItem("chat-user", JSON.stringify(data))
         setAuthUser(data)

      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message)
        } 
      } finally {
         setLoading(false);
      }
   }

   return {loading, signup}
}

export default useSignup

function handleInputErrors({fullname, username, password, confirmPassword, gender}:SignupData) {
   if(!fullname || !username || !password || !confirmPassword || !gender) {
      toast.error('Please fill in all fields')
      return false
   }

   if(password !== confirmPassword) {
      toast.error('Passwords do not match')
      return false
   }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

   return true
}