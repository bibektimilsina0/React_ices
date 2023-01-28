import "./Home.css"
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import ThemeContext from "./context/Themecontext";


const Home=()=>{
    const {theme} =useContext(ThemeContext);
    const [addTheme,setAddTheme]=useState([theme]);
    const toggleTheme=()=>{
    
         (addTheme==="dark")? setAddTheme("light") : setAddTheme("dark");

    }
    
 return(
    <div className={`${addTheme}`}>
        <Navbar/>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta similique tenetur doloremque excepturi quos quaerat ut magnam? Non tempore harum ullam optio corporis labore voluptatibus accusamus accusantium, cupiditate laudantium?</p>
        <button   onClick={()=>{toggleTheme()}}>toggle theme</button>
    </div>
 )
}
export default Home;