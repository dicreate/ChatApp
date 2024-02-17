import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { Socket, io } from "socket.io-client";


type SocketContextProviderProps = {
   children: ReactNode;
};

interface SocketContextInterface {
   socket: Socket | null;
   onlineUsers: string[];
}

const SocketContext = createContext<SocketContextInterface | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
   const context = useContext(SocketContext);

   if (!context) {
      throw new Error("useSocketContext must be used within an SocketContextProvider");
   }

   return context;
}

export const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
   const [socket, setSocket] = useState<Socket | null>(null);
   const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
   const { authUser } = useAuthContext();

   useEffect(() => {
      if (authUser) {
         const newSocket = io("http://localhost:5000", {
            query: {
               userId: authUser._id
            }
         });
         setSocket(newSocket);

         newSocket.on("getOnlineUsers", (users) => {
            setOnlineUsers(users);
         });

         return () => {
            newSocket.close();
         };
      } else {
         if (socket) {
            socket.close();
            setSocket(null);
         }
      }
   }, [authUser]);

   return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
}