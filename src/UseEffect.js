import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
const UseEffect=()=>{
  
    let [data , setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then ((data)=>setData(data))
        .catch((err)=> console.log("err"));
    },[])
    return (
     <div>
         <Navbar/>
         {data.map((data)=>{
           return   <p key={data.id}>
              {data.title}
              <br/>
          </p>
         })}
         
     </div>
           
        
    )

}
export default UseEffect;