import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteProvider'
import { Link } from 'react-router-dom';

function NoteItem() {
  
  const {notes} = useContext(NoteContext);

  if(notes.length == ''){
    return(
      <div className='flex items-center mt-20 md:mt-0  flex-col justify-center h-4/5 text-white'>
        <p className='text-xl'>No Notes.</p>
        <p className='max-[340px]:text-xs text-sm'>Tap the Add button to create a note.</p>
      </div>
    )
  }



  return (
    <div className='w-full  flex flex-wrap items-center  gap-3 mt-5'>

{
  notes.map((note,index) => (
    <div className='bg-[rgba(255,255,255,0.03)] p-3  ' key={index}>
      <Link to={`/notedetail/${index}`}>
        <p className='text-green-300'>Note {index+1}</p>
      <p className='text-xl font-bold text-white'>{note.title}</p>
      <p className='text-white'>{note.content.substring(0,30)}...</p>
      </Link>
    </div>
  )) 
}

    </div>
  )
}

export default NoteItem
