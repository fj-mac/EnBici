import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import LoginAgain from './Components/LoginAgain'
import Grupos from './Components/Grupos'
import Crear from './Components/Crear'

function App() {
  const [paseos, setPaseos] = useState([]);
  const [err, setErr] = useState("");
  const [usuario, setUsuario] = useState("null");

  useEffect(()=> {
    let HOST = window.location.origin.replace(/^http/, 'ws');
    let ws = new WebSocket(HOST);

    //const ws = new WebSocket("ws://localhost:3001");
    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        setPaseos(JSON.parse(msg.data));
        console.log("Got ws data",msg);
      };
    };

    getLocation();

    fetch("paseos")
      .then(res => res.json())
      .then( data => {
        if(data.err) {
          setErr(JSON.stringify(data.msg));
        }
        else{
          setPaseos(data);
        }
      });

    fetch("actual")
      .then(res => res.json())
      .then(data => {
        if(data !== "No hay nada")
        {
          let json = JSON.parse(data);
          setUsuario(json["actual"]);
        }
        else
        {
          setUsuario("No hay usuario");
        }
      });
  },[]);

  function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else {
    console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude);
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="container">
            <NavBar usuario={usuario}/>
            <Route path='/' component ={Home} exact/>
            <Route path='logout' component ={Home}/>
            <Route path='/grupos' render = {(props) => <Grupos {...props} usuario = {usuario} paseos = {paseos} />} />
            <Route path='/login' component ={Login}/>
            <Route path='/loginAgain' component ={LoginAgain}/>
            <Route path='/crear' render = {(props) => <Crear {...props} usuario = {usuario} />}/>
          </div>
        </div>
      </Switch>
    </Router>

  )
}



export default App;
