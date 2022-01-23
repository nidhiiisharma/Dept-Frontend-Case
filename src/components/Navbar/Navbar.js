import { useState } from "react";
import logoBlack from "../../assets/dept_logo_black.svg";
import './Navbar.css';

const Navbar = ({ showMenu, setShowMenu }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if(window.scrollY >= 100){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeNavbarBackground);

  return (
    <nav className={`${'navbar'} ${navbar ? 'navbar-scroll active' : ''}`}>
      <div className={`${'navbar-container'} ${navbar ? 'navbar-container-scroll active' : ''}`}>
          <a href="#">
            <img className={`${'logo'} ${navbar ? 'navbar-logo-scroll active' : ''}`} src={logoBlack} alt="dept logo"></img>
          </a>
        <div className={`${'navbar-btn'} ${showMenu ? 'navbar-btn-active' : ''}`} 
        onClick={() => setShowMenu(prevState => !prevState)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
  