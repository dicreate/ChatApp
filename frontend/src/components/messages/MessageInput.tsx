import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
const MessageInput = () => {
   const [message, setMessage] = useState<string>("");
   const { loading, sendMessage } = useSendMessage();

   const handleSumbit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (!message) return
      await sendMessage(message);
      setMessage("");
   }


   return (
      <form className="px-4 my-3" onSubmit={handleSumbit}>
         <div className="w-full relative">
            {/*    <textarea
               className="border text-md rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white resize-none pr-10 leading-tight"
               placeholder="Send a message"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               rows={1}
            /> */}
            <TextareaAutosize
               className="border text-md rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white resize-none pr-12 leading-tight"
               placeholder="Send a message"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               maxRows={4}
            />
            <button className="absolute inset-y-0 end-0 flex items-end p-2 pr-4">
               {loading ? <div className="loading loading-spinner"></div> : <BsSend className="text-slate-300 h-6 w-6" />}
            </button>
         </div>

      </form>
   )
}

export default MessageInput