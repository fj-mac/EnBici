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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="navbar-brand"><Link to="/grupos">Grupos</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="navbar-brand"><Link to="/crear">Nuevo Grupo</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        {props.usuario!=="No hay usuario" ?
        <div>
            <div className="navbar-brand"><Link onClick={()=>salir()}>LogOut</Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
        </div>:
        <div>
            <div className="navbar-brand"><Link to="/login">LogIn</Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
        </div>}
    </nav>
      </div>
    )
}
export default NavBar;