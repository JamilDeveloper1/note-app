import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteProvider'
import {BiSend} from 'react-icons/bi'
function AddNote() {
  const {title,content,addNotes,setTitle,setContent,openBar} = useContext(NoteContext);

  return (
    <div className={`${openBar ? 'left-0' : '-left-full'} fixed bg-[#181818] h-screen  flex flex-col gap-3 p-3  w-full `}> 
    <div className='flex justify-end'>
    <BiSend onClick={addNotes} className='text-white text-2xl cursor-pointer'/>
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}  type="text" className='outline-none p-1 w-full bg-transparent border-b border-gray-500 text-white'  placeholder='Title...' />
      <textarea value={content} onChange={(e) => setContent(e.target.value)}  placeholder='Content...' className='outline-none p-1 w-full h-[90%] text-white resize-none bg-transparent' cols="30" rows="10"></textarea>
    </div>
  )
}

export default AddNote
