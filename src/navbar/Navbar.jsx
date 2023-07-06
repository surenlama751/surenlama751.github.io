
import Logo from './1.png';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeIcon = () => {
    setOpenMenu(!openMenu)
  }
 
  const handleChange = () =>{
    setOpenMenu(false);
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
          <Link smooth to ="/#home" className="pages" onClick={handleChange}>HOME</Link>
          <Link smooth to ="/#about" className="pages" onClick={handleChange}>ABOUT</Link>
          <Link smooth to ="/#services" className="pages" onClick={handleChange}>SERVICE</Link>
          <Link smooth to ="/#projects" className="pages" onClick={handleChange}>PROJECTS</Link>
          <Link smooth to ="/#contact" className="pages" onClick={handleChange}>CONTACT</Link>
        </nav>
      )}
      </div>
      
    </div>
   
  )
}
export default Navbar;