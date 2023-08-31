import { createContext,  useEffect, useState } from "react";


export const NoteContext = createContext();


export const NoteProvider = ({children}) =>{



    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [notes,setNotes] = useState([]);

    const [openBar,setOpenBar] = useState(false);
    
    const [trash,setTrash] = useState([]); 

    const [favorite,setFavorite] = useState([]);


    const [cat,setCat] = useState(false);
    function handleCat(){
      setCat(!cat);
    }
  





const addFavs = (fav,id) => {
    const favItem = notes.find((item,index) => index === id);


    if(favItem){
        const newFav = [...favorite].map((item,index) => {
            if(index === id){
                return {...item , amount : 1}
            }else{
                return item;
            }
        })
        setFavorite(newFav);
    }
else{
setFavorite([...favorite,{...fav,amount : 1}])
}

handleCat();
}












    const handleClick = () =>{
        setOpenBar(!openBar);
    }

    const addNotes = () =>{
        if(title.trim() !== "" && content.trim() !== "" ){
            setNotes([...notes,{ title, content}]);
        }
        setContent('');
        setTitle('');
        handleClick();
    }


    const removeNotes = (note,id) => {

        //Add to Trash

        const trashItem = notes.find((item,index) => index === id);

        if(trashItem){
            const newTrash = [...trash].map((item,index) => {
                if(index === id){
                    return {...item , amount : 1}
                }else{
                    return item;
                }
            })
            setTrash(newTrash);
        }
else{
    setTrash([...trash,{...note,amount : 1}])
}


        const newNote = notes.filter((_,index) => index !== parseInt(id));
        setNotes(newNote);


      }
    
      const removeFromFavorites = (id) =>{
        const newItem = favorite.filter((item,index) => index !== id);
        setFavorite(newItem);
      }


const removeFromTrash = (id) =>{
    const newItem = trash.filter((item,index) => index !== id);
    setTrash(newItem);
    removeFromFavorites();
}

  



//ADD TO LOCALSTORAGE NOTES
useEffect(() =>{
    const newLocal = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(newLocal)
},[])

useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
}, [notes]);

//ADD TO LOCALSTORAGE FAVORITE
useEffect(() =>{
    const newLocal = JSON.parse(localStorage.getItem('favs')) || [];
    setFavorite(newLocal)
},[])

useEffect(() => {
    localStorage.setItem('favs',JSON.stringify(favorite));
}, [favorite]);

//ADD TO LOCALSTORAGE TRASH
useEffect(() =>{
    const newLocal = JSON.parse(localStorage.getItem('trash')) || [];
    setTrash(newLocal)
},[])

useEffect(() => {
    localStorage.setItem('trash',JSON.stringify(trash));
}, [trash]);





    return(
        <NoteContext.Provider value={{
            title,
            content,
            notes,
            setNotes,
            addNotes,
            setTitle,
            setContent,
            handleClick,
            openBar,
            removeNotes,
            trash,
            addFavs,
            favorite,
            handleCat,
            cat,
            removeFromTrash,
            setFavorite,
            setTrash
            }}>
            {children}
        </NoteContext.Provider>
    )
}