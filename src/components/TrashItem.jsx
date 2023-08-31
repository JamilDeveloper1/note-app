import React, {  useContext } from 'react'
import { NoteContext } from '../context/NoteProvider'
import {BiTrash} from 'react-icons/bi'
function TrashItem() {

const {trash, removeFromTrash} = useContext(NoteContext);

    if(trash.length == ""){
        return(
            <div className='text-white  text-xl mt-20 md:mt-0  h-4/5 flex items-center justify-center'>
                Trash is empty.
            </div>
        )
    }

  return (
    <div className='flex flex-col gap-3'>
        {
            trash.map((item,index) => (
                <div key={index} className='text-white flex items-center justify-between p-3 bg-[rgba(255,255,255,0.03)] '>
                      <div>
                    <p className='text-green-300'>Note {index+1}</p>
                
                    <p>{item.title}</p>
                    <p>{item.content.substring(0,40)}...</p>
                    </div>
                    <BiTrash onClick={()=>removeFromTrash(index)} className='cursor-pointer text-2xl text-red-500' />
                </div>
            ))
        }
    </div>
  )
}

export default TrashItem