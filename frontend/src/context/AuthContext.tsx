import { createContext, ReactNode, useContext, useState } from "react";
import { AuthUserType } from "../models/auth.models";


type AuthContextProviderProps = {
   children: ReactNode;
};

export const AuthContext = createContext<AuthUserType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error("useAuthContext must be used within an AuthContextProvider");
   }

   return context;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
   const storedUser = localStorage.getItem("chat-user");
   const initialAuthUser = storedUser ? JSON.parse(storedUser) : null;
   const [authUser, setAuthUser] = useState<string | null>(initialAuthUser);

   return <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
   </AuthContext.Provider>
}