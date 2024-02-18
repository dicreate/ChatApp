export interface ConversationType {
   _id: string;
   fullname: string;
   username: string;
   gender: string;
   profilePic: string;
 }

 export type MessageType = {
  _id: string;
  message: string;
  receiverId: string;
  senderId: string;
  createdAt: string;
  shouldShake: boolean;
 }