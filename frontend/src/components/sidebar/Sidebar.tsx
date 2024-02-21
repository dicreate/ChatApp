import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import useConversation from "../../zustand/useConversation";
const Sidebar = () => {
   const { selectedConversation } = useConversation();

   return (
      <div className={`border-r border-slate-500 p-4 flex flex-col max-480:border-none max-480:w-full ${selectedConversation ? `max-sm:hidden` : ``}`}>
         <SearchInput />
         <div className="divider px-3"></div>
         <Conversations />
         <LogoutButton />
      </div>
   )
}

export default Sidebar