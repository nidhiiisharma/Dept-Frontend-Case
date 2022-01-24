import logoWhite from '../../assets/dept_logo_white.svg'
import closeIcon from "../../assets/icons/close_icon.png"
import './Menu.css'

const Menu = ({ closeMenu }) => {
  const items = ['home', 'werk', 'over', 'diensten', 'partners', 'stories', 'vacatures', 'events', 'contact']

  return (
    <div className="navbar-menu">
      <div className="navbar-menu-container">
        <a href="#">
            <img className="menu-logo" src={logoWhite} alt="dept logo"></img>
        </a>
        <div className="navbar-menu-close" onClick={closeMenu}>
          <img src={closeIcon} alt="Close icon" className="close-icon" />
        </div>
        <div className="navbar-menu-items">
          {items.map((item, index) => <a 
            key={index}
            className="menu-item"
            href="#"
          >
            {item}
          </a>)}
        </div>
      </div>
    </div>
  )
}
export default Menu
