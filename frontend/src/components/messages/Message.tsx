import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

interface propTypes {
   message: string;
   senderId: string;
   createdAt: string;
}

const Message = ({ message, senderId, createdAt }: propTypes) => {
   const { authUser } = useAuthContext();
   const { selectedConversation } = useConversation()
   const fromMe = senderId === authUser?._id;
   const chatClassName = fromMe ? "chat-end" : "chat-start";
   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
   const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
   const formattedTime = extractTime(createdAt)


   console.log(authUser)

   return (<>
      <div className={`chat ${chatClassName}`}>
         <div className="chat-image avatar">
            <div className="w-10 rounded-full">
               <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
         </div>
         <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
            {message}
         </div>
         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{formattedTime}</div>
      </div>
   </>
   )
}

export default Message