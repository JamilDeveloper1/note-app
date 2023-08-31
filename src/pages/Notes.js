import React, { useContext } from 'react'
import NoteItem from '../components/NoteItem'

import {FaBars} from 'react-icons/fa'
import { MobileContext } from '../context/MobileProvider'

function Notes() {
  const {handleTrueFalse} = useContext(MobileContext);
  return (
    <div className='w-full md:w-4/5 p-3 bg-[#1C1C1C]'>
      <FaBars onClick={handleTrueFalse} className=' md:hidden text-white cursor-pointer' />
      <h1 className='mt-4 text-xl text-white'>All Notes</h1>
      <NoteItem/> 
    </div>
  )
}

export default Notes
