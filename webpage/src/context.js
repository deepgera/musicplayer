import { createContext, useState } from "react"
import React from 'react';
export const Songcontext= createContext();
const Context=props=>{

    const[searchValue,setsearchValue]=useState("");
    const[ searchSongData,setsearchsongdata]=useState([]);
    const[songurl,setsongurl]=useState([]);
    const [playsong, setplaysong] = useState(false);
    const[playnow,setPlaynow]=useState(false);
    const [searchbarval,setsearchbarval]=useState("");
    const [cover,setcover]=useState("loading");
    const [title,settitle]=useState("loading");
    return (
        <Songcontext.Provider value={{
            value : [searchValue,setsearchValue] 
            ,songdata:[searchSongData,setsearchsongdata] 
            ,playing:[playsong, setplaysong]
            ,Url: [songurl,setsongurl]
            ,nowplay:[playnow,setPlaynow]
            ,searchbar:[searchbarval,setsearchbarval]
            ,covers:[cover,setcover]
            ,titles:[title,settitle]
            }} >
            {props.children}
        </Songcontext.Provider>
    );
}
export {Context};
