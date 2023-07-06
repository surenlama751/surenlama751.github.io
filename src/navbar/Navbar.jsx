
import Logo from './1.png';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeIcon = () => {
    setOpenMenu(!openMenu)

  

  }
 
 
  
  return(
    
    <div className="nav-bar">
      <div className="logo">
        <img src={Logo} id="logo"/>
      </div>
      <div className="menu-bar">
      <button id="menu-bar-btn" onClick ={changeIcon}>{openMenu ?<FaTimes id="time-bar"/> : <FaBars/>}
      </button>
      {openMenu &&(
        <nav className='nav-pages'>
          <Link to ="/" className="pages">HOME</Link>
          <Link to ="/about" className="pages">ABOUT</Link>
          <Link to ="/contact" className="pages">SERVICE</Link>
          <Link to ="/projects" className="pages">PROJECTS</Link>
          <Link to ="/contact" className="pages">CONTACT</Link>
        </nav>
      )}
      </div>
      
    </div>
   
  )
}
export default Navbar;