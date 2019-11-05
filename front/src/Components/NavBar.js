import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import './NavBar.css';


const NavBar =(props)=>{

function salir(){
    fetch("/logout").then(console.log("Ya hizo logout"))
}

  return(
      <div className = "NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand"><Link to="/">Tu Mejor Ruta</Link></div>
        <div className="navbar-brand"><Link to="/grupos">Grupos</Link></div>
        <div className="navbar-brand"><Link to="/crear">Nuevo Grupo</Link></div>
        {props.usuario!=="No hay usuario" ?
        <div>
            <div className="navbar-brand"><Link onClick={()=>salir()}>LogOut</Link></div>
        </div>:
        <div>
            <div className="navbar-brand"><Link to="/login">LogIn</Link></div>
        </div>}
    </nav>
      </div>
    )
}
export default NavBar;