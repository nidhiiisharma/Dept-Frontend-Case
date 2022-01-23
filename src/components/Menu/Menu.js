import './Menu.css'

const Menu = () => {
  const items = ['home', 'werk', 'over', 'diensten', 'partners', 'stories', 'vacatures', 'events', 'contact']

  return (
    <div className="navbar-menu">
      <div className="navbar-menu-container">
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
