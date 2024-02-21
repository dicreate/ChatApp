import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
   const [message, setMessage] = useState<string>("");
   const { loading, sendMessage } = useSendMessage()

   const handleSumbit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (!message) return
      await sendMessage(message);
      setMessage("");
   }

   return (
      <form className="px-4 my-3" onSubmit={handleSumbit}>
         <div className="w-full relative">
            <input
               type="text"
               className="border text-md rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
               placeholder="Send a message"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className="absolute inset-y-0 end-0 flex items-center p-3">
               {loading ? <div className="loading loading-spinner"></div> : <BsSend className="text-slate-300 h-6 w-6" />}
            </button>
         </div>

      </form>
   )
}

export default MessageInput