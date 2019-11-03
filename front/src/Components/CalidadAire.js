import React, { Component } from "react";




class Aire extends Component{
state={
  loading:true,
  calidadActual:null
};
async componentDidMount(){
  const url='https://api.waqi.info/feed/bogota/?token=dff319f47044fe2a774b924e794aead02b2d5e12';
  const response=await fetch(url);
  const data=await response.json();
  console.log(data.data.aqi);
  this.setState({calidadActual: data.data})
  this.setState({loading:false})
}

render(){
  return(
    <div>
      {this.state.loading ? <div>Se esta cargando la informacion de la calidad del aire</div>:<div>{this.state.calidadActual.aqi}</div>}
    </div>
    )
  }
}

export default Aire;