import React, { useContext } from 'react'
import FavoriteItem from '../components/FavoriteItem'
import { NoteContext } from '../context/NoteProvider'
import {FaBars} from 'react-icons/fa'
import { MobileContext } from '../context/MobileProvider'
import {AiOutlineClear} from 'react-icons/ai'
function Favorites() {
  const {setFavorite} = useContext(NoteContext);
  const {handleTrueFalse} = useContext(MobileContext);
  return (
    <div className=' w-full md:w-4/5 p-3 bg-[#1C1C1C]'>
            <FaBars onClick={handleTrueFalse} className=' md:hidden text-white cursor-pointer' />

      <div className='flex items-center justify-between'>
      <h1 className='mt-4 text-xl text-white'>Favorites</h1>
    <AiOutlineClear onClick={()=>setFavorite([])} className='cursor-pointer text-xl text-white' /> 
    </div>
    <FavoriteItem/>
  </div>
  )
}

export default Favorites
