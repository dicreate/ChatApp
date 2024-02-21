import { useEffect, useState } from 'react';
import { MessageContainer, Sidebar } from '../../components'
import useConversation from '../../zustand/useConversation';

function Home() {

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const { selectedConversation, setSelectedConversation } = useConversation();

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      // Добавляем обработчик события при монтировании компонента
      window.addEventListener('resize', handleResize);

      // Возвращаем функцию для очистки, которая удаляет обработчик события
      return () => window.removeEventListener('resize', handleResize);
   }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании и размонтировании



   return (
      <div className='flex sm:h-[550px] md: h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
         {
            windowWidth > 580
               ? (<>
                  <Sidebar />
                  <MessageContainer />
               </>)
               : (<>
                  <Sidebar />
                  <MessageContainer />
               </>)
         }
      </div>
   )
}

export default Home