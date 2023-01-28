import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

const About=()=>{

return(
    <div >
        <Navbar/>
        <p >My name is bibek timilsina.</p>
    <Link to="/">HOME</Link>
    </div>
    
)

}
export default About;