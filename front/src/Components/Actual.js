import React, { Component } from "react";

import './Actual.css';


class Aire extends Component{
state={
  actual:"todavia no",
};
async componentDidMount(){
  const url='/actual';
  const response=await fetch(url);
  const data=await response.json();
  console.log(data)
  this.setState({actual: data.actual})
}

render(){
  return(
    <div >
      <h2 className = "titulo">La actual es {this.state.actual}</h2>
    </div>
    )
  }
}

export default Aire;