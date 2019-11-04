import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import './NavBar.css';


const NavBar =(props)=>{


  return(
      <div className = "NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <li className="navbar-brand"><Link to="/">Tu Mejor Ruta</Link></li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <li className="navbar-brand"><Link to="/grupos">Grupos</Link></li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <li className="navbar-brand"><Link to="/crear">Nuevo Grupo</Link></li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        {props.usuario!=="No hay usuario" ?
        <div>
            <li className="navbar-brand"><Link to="/logout">LogOut</Link></li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
        </div>:
        <div>
            <li className="navbar-brand"><Link to="/login">LogIn</Link></li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
        </div>}
    </nav>
      </div>
    )
}
export default NavBar;