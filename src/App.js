import { useState } from "react";
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Clients from './components/Clients/Client'
import Cases from "./components/Cases/Case";
import { clientLogos } from "../src/data/clients-data"
import { casesInfo } from "../src/data/cases-data"
import './App.css';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <Header />
      <Cases casesInfo={casesInfo} />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Clients clientsLogo={clientLogos}/>
      <Footer />
    </div>
  );
}

export default App;
