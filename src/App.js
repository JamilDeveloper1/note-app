import React, { useContext } from 'react'
import Sidebar from './pages/Sidebar'
import Notes from './pages/Notes'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Trash from './pages/Trash'
import { NoteContext } from './context/NoteProvider'
import AddNote from './components/AddNote'
import NoteDetail from './pages/NoteDetail'

import {BiEdit} from 'react-icons/bi';
import { MobileProvider } from './context/MobileProvider'

function App() {
  const {handleClick} = useContext(NoteContext);
  return (
    <div className='flex md:h-screen'>
 <MobileProvider>
           <Router>
      <Sidebar/>
   <BiEdit onClick={handleClick} className='text-white text-5xl p-1 rounded-full bg-[rgba(255,255,255,0.03)] cursor-pointer fixed bottom-3 right-3 '/>
<Routes>
 <Route path='/' element={<Notes/>} />
 <Route path='/favorites' element={<Favorites/>} />
 <Route path='/trash' element={<Trash/>} />
</Routes>

  <Routes>
    
<Route path='/notedetail/:id' element={<NoteDetail/>} />
  </Routes>

<AddNote/>
      </Router>
      </MobileProvider>
    </div>
  )
}

export default App
