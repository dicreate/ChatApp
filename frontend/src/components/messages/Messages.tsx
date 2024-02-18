import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import { MessageType } from "../../models/conversation.model"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages"
const Messages = () => {

  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((messageObj: MessageType) => (
        <div key={messageObj._id} ref={lastMessageRef}>
          <Message message={messageObj.message} senderId={messageObj.senderId} createdAt={messageObj.createdAt} shouldShake={messageObj.shouldShake} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-slate-400">Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages