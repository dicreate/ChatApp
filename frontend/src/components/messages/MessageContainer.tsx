import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NotChatSelected from "./NotChatSelected";

const MessageContainer = () => {
   const { selectedConversation, setSelectedConversation } = useConversation();

   useEffect(() => {
      return () => {
         setSelectedConversation(null);
      }
   }, [setSelectedConversation])

   return (
      <div className={`w-full flex flex-col ${selectedConversation ? `` : `max-xm:hidden`}`}>
         {
            !selectedConversation
               ? <NotChatSelected />
               : (
                  <>
                     {/* Header */}
                     <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To: </span><span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
                     </div>

                     <Messages />
                     <MessageInput />
                  </>
               )
         }
      </div>
   )
}

export default MessageContainer