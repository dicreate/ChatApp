import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import NotChatSelected from "./NotChatSelected";
import { IoMdArrowRoundBack } from "react-icons/io";

const MessageContainer = () => {
   const { selectedConversation, setSelectedConversation } = useConversation();

   useEffect(() => {
      return () => {
         setSelectedConversation(null);
      }
   }, [setSelectedConversation])

   return (
      <div className={`w-full flex flex-col max-480:hidden ${selectedConversation ? `` : `max-640:hidden`}`}>
         {
            !selectedConversation
               ? <NotChatSelected />
               : (
                  <>
                     {/* Header */}
                     <div className="flex items-center text-md bg-slate-500 px-4 py-2 mb-2 gap-1">
                        <IoMdArrowRoundBack
                           className="w-10 h-10 mr-2 text-black cursor-pointer"
                           onClick={() => setSelectedConversation(null)}
                        />
                        <span className="label-text">To: </span>
                        <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
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