import { useState } from "react";

import Navbar from "./Navbar";

const  Usestate=()=>{

    let [inputValue,setInputValue] =useState();
    const handleChange=(e)=>{
        setInputValue(e.target.value)
    } ;
    return (
        <>
        <Navbar/>
        <input type="text" onChange={handleChange}/>
        {inputValue}
        </>
    )
}
export default Usestate;