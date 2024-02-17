import { create } from "zustand";
import { ConversationType } from "../models/conversation.model";
import { MessageType } from "../models/conversation.model";
interface ConversationState {
  selectedConversation: ConversationType | null;
  setSelectedConversation: (selectedConversation: ConversationType | null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: ConversationType | null) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages: MessageType[]) => set({ messages }),
}));

export default useConversation;