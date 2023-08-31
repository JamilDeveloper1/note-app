import React, { useContext } from 'react'
import TrashItem from '../components/TrashItem'
import {FaBars} from 'react-icons/fa'
import { MobileContext } from '../context/MobileProvider'
import { NoteContext } from '../context/NoteProvider';
import { AiOutlineClear } from 'react-icons/ai';
function Trash() {
  const {handleTrueFalse} = useContext(MobileContext);
  const {setTrash} = useContext(NoteContext);
  return (
         <div className='w-full md:w-4/5 p-3 bg-[#1C1C1C]'>

      <FaBars onClick={handleTrueFalse} className=' md:hidden text-white cursor-pointer' />
   <div className='flex items-center justify-between'>
    <h1 className='mt-4 text-xl text-white'>Trash</h1>
    <AiOutlineClear onClick={()=>setTrash([])} className='cursor-pointer text-xl text-white' /> 

    </div>
    <TrashItem/>
  </div>

  )
}

export default Trash
