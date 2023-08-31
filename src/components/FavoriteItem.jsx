import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteProvider'

function FavoriteItem() {

    const {favorite} = useContext(NoteContext);


    if(favorite.length == ""){
        return(
            <div className='flex items-center justify-center mt-20 md:mt-0 h-4/5 text-white text-xl'>
                Favorite is empty.
            </div>
        )
    }

  return (
    <div className=' mt-5  text-white flex flex-wrap  gap-3'>
      {
        favorite.map((item,index) => (
            <div className='text-white p-3 bg-[rgba(255,255,255,0.03)]' key={index}>
               <p className='text-green-300'>Note {index+1}</p>
                <p>{item.title}</p>
                <p>{item.content}</p>
            </div>
        ))
      }
    </div>
  )
}

export default FavoriteItem
