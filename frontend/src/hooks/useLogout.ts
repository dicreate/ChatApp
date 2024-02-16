import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";

const useLogout = () => {
   const [loading, setLoading] = useState<boolean>(false)
   const { setAuthUser } = useAuthContext();

   const logout = async () => {
      setLoading(false);

      try {
         const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
         })

         const data = await res.json();

         if(data.error) {
            throw new Error(data.error)
         }
         
         localStorage.removeItem("chat-user");
         setAuthUser(null);
      } catch(error) {
         if(error instanceof Error) {
            toast.error(error.message)
         }
      } finally {
         setLoading(false);
      }
   }

   return {loading, logout}
}

export default useLogout