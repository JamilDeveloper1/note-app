import { createContext, useState } from "react";

export const MobileContext = createContext();


export const MobileProvider = ({children}) =>{
   
    const [trueFalse,setTrueFalse] = useState(false);

    const handleTrueFalse = () => {
        setTrueFalse(!trueFalse);
    }
   
    return(
        <MobileContext.Provider value={{trueFalse,handleTrueFalse}}>
            {children}
        </MobileContext.Provider>
    )
}