import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Grupos from './Components/Grupos'
import Crear from './Components/Crear'

function App() {
  const [paseos, setPaseos] = useState([]);
  const [err, setErr] = useState("");

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
  },[]);
  
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="container">
            <NavBar/>
          </div>
          <Route path='/' component ={Home} exact/>
          <div className="container">
            <Route path='/grupos' render = {(props) => <Grupos {...props} paseos = {paseos} />} />
            <Route path='/login' component ={Login}/>
            <Route path='/crear' component ={Crear}/>
          </div>
        </div>
      </Switch>
    </Router>

  )
}



export default App;
