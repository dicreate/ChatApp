import { MessageContainer, Sidebar } from '../../components'

function Home() {

   return (
      <div className='flex sm:h-[550px] md: h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
         <Sidebar />
         <MessageContainer />

      </div>
   )
}

export default Home