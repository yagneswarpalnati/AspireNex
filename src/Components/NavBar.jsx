import '../Components/Routes/Home.css';
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import { useState } from "react";


export default function NavBar(){
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const [color,setColor]=useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor);
    return (
        <header >
                <nav className={color ? 'header header-bg':'header'}>

                    <Link to='/'><h1>Protfolio</h1></Link>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/project'>Project</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                    <div className='hamBurger' onClick={handleClick}>
                        {click ? <FaTimes size={20} style={{color:"white"}}/> :
                        <FaBars size={20} style={{color:"white"}}/>}
                    </div>
                </nav>
                
        </header>
    );
}