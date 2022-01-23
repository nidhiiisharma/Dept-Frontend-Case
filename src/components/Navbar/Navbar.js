import logoBlack from "../../assets/dept_logo_black.svg";
import logoWhite from "../../assets/dept_logo_white.svg";
import './Navbar.css';

const NavBar = ({ showMenu, setShowMenu }) => (
    <nav className={`${'navbar'} ${showMenu ? 'navbar-active' : ''}`}>
      <div className="navbar-container">
          <a href="#">
            <img className="logo" src={showMenu ? logoWhite : logoBlack} alt='Dept logo' />
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
export default NavBar
  