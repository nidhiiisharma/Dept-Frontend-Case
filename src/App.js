import { useEffect, useState } from 'react'
import './App.css';
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Clients from './components/Clients/Clients';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="App">
      <Header />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Menu />}
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default App;
