
import { Link, Outlet } from "react-router-dom";
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <>
            <div className={styles.logo}>logo</div>

            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shoping">Shoping</Link>
                <Link to="/useeffect">UseEffect</Link>
                <Link to="/usestate">Usestate</Link>
            </ul>
            <Outlet/>
        </>
    )
}
export default Navbar;