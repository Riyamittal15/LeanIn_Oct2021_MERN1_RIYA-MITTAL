import "./topbar.scss";

/*export default function Topbar() {
    return(
        <div className="topbar">
            vvjj
        </div>
    )

}*/
//import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            HOME
          </a>
          <div className="itemContainer">
            <span>Riya</span>
          </div>
          <div className="itemContainer">
            <span>riya17367@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
