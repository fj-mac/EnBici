import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [docs, setDocs] = useState([]);
  const [err, setErr] = useState("");

  useEffect(()=> {
    let HOST = window.location.origin.replace(/^http/, 'ws');
    let ws = new WebSocket(HOST);

    //const ws = new WebSocket("ws://localhost:3001");
    ws.onopen = () => {
      console.log("Connected to ws");

      ws.onmessage = msg => {
        setDocs(JSON.parse(msg.data));
        console.log("Got ws data",msg);
      };
    };

    fetch("data")
      .then(res => res.json())
      .then( data => {
        if(data.err) {
          setErr(JSON.stringify(data.msg));
        }
        else{
          setDocs(data);
        }
      });
  },[]);

  const renderDocs = () => docs.map(d => <div key={d.name}>{d.name} </div>)


  return (
    <div className="App">
      <h1>Reacctive</h1>
      <div>{err}</div>
      {renderDocs()}
    </div>
  );
}

export default App;
