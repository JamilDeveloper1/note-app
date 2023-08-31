import React, { useContext } from 'react'
// import {FaSearch} from 'react-icons/fa'
import {AiOutlineStar,AiOutlineFolderOpen} from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { NoteContext } from '../context/NoteProvider'
import { MobileContext } from '../context/MobileProvider'

function Sidebar() {
  const {handleClick,notes,trash,favorite} = useContext(NoteContext);
  const {trueFalse,handleTrueFalse} = useContext(MobileContext);
  return (
    <div className={`fixed ${trueFalse ? 'left-0' : '-left-full'}  transition-all duration-500 md:left-0 w-full h-full bg-[#181818] md:relative   md:w-1/5 p-3 md:flex flex-col gap-3 `}>
        <div className='text-white flex items-center justify-between mt-4'>
            <h1 className='text-xl'>NoteApp</h1>
{/* <FaSearch className='cursor-pointer'/> */}
        </div>
        <button onClick={handleClick} className='bg-[rgba(255,255,255,0.05)] text-white p-1' > <span className='text-xl'>+</span> New Note</button>
    <div className='flex flex-col gap-3 text-white mt-5'>
    <Link to='/' onClick={handleTrueFalse} className='flex p-1 shadow-md shadow-[#00000050] items-center justify-between'>
   
      <p className='flex items-center gap-1'><AiOutlineFolderOpen/> All</p>
      
       {notes.length}
       </Link>
    <Link  to='/favorites'  onClick={handleTrueFalse} className='p-1 shadow-md shadow-[#00000050] flex items-center justify-between'>
      
      <p className='flex items-center gap-1'><AiOutlineStar/> Favorites</p>
   
       {favorite.length}   </Link>
    <Link to='/trash'  onClick={handleTrueFalse} className='p-1 shadow-md shadow-[#00000050] flex items-center justify-between'><p className='flex items-center gap-1'><BiTrash/> Trash</p> {trash.length}</Link>
    </div>

    </div>
  )
}

export default Sidebar
