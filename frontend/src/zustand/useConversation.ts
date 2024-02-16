import { create } from "zustand";
import { ConversationType } from "../models/conversation.model";

interface ConversationState {
  selectedConversation: ConversationType | null;
  setSelectedConversation: (selectedConversation: ConversationType | null) => void;
  messages: string[];
  setMessages: (messages: string[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: ConversationType | null) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages: string[]) => set({ messages }),
}));

export default useConversation;