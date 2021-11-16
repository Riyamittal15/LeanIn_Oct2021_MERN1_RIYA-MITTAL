import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Myself from "./components/myself/Myself"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Myself/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
