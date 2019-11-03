import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Grupos from './Components/Grupos'

function App() {
  const [paseos, setPaseos] = useState([]);
  const [err, setErr] = useState("");

  useEffect(()=> {
    //const HOST = window.location.origin.replace(/^http/, 'ws');
    //const ws = new WebSocket(HOST);
    const ws = new WebSocket("ws://localhost:3001");
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

  const renderDocs = () => paseos.map(d => <div key={d.nombre}>{d.nombre} </div>)


  return (
    <Router>
    <Switch>
    <div className="App">
      <NavBar/>
      <Route path='/' component ={Home} exact/>
      <Route path='/grupos' render = {(props) => <Grupos {...props} paseos = {paseos} />} />
      <Route path='/login' component ={Login}/>
    </div>
    </Switch>
    </Router>
  )
}
function Gruposs(){
  return(
    <div>
      <Grupos/>
    </div>
  );
};
function Loginn(){
  return(
    <div>
      <Login/>
    </div>
  );
};
function Homee(){
  return(
    <div>
      <Home/>
    </div>
  );
};


export default App;
