import { useEffect, useState } from 'react'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Clients from './components/clients/Client'
import { clientLogos } from "../src/data/clients-data"
import './App.css';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <Header />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Menu />}
      <Clients clientsLogo={clientLogos}/>
      <Footer />
    </div>
  );
}

export default App;
