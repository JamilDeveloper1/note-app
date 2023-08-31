import React, { useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import { NoteContext } from '../context/NoteProvider';
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'
import { MobileContext } from '../context/MobileProvider'
function NoteDetail() {


 
  const {id} = useParams();
  const {notes,removeNotes,addFavs,handleCat,cat} = useContext(NoteContext);
  const {handleTrueFalse} = useContext(MobileContext);


  const note = notes.find((_,index) => index === parseInt(id));

  const {title,content} = note;

  return (
    <div className='bg-[#1C1C1C] w-full md:w-4/5 text-white flex flex-col  gap-10 p-3'>
            <FaBars onClick={handleTrueFalse} className=' md:hidden text-white cursor-pointer' />

      <div className='flex items-center justify-between'>
      <p className=' text-xl md:text-4xl font-bold mt-4'>{title}</p>
      <HiOutlineDotsCircleHorizontal onClick={handleCat}  className='text-2xl cursor-pointer'/>
      </div>
      <p>{content}</p>
      <div className={` ${ cat ? 'flex' : 'hidden'} absolute top-14 p-3 border border-white right-4  flex-col gap-3 bg-[#1C1C1C]`}>
        <button onClick={()=>addFavs(note,id)} className='text-start'>Add Favorites</button>
        <Link to='/'>
        <button onClick={()=>removeNotes(note,id)}  className='text-start'>Delete</button>
        </Link>
      </div>
    </div>
  )
}

export default NoteDetail
