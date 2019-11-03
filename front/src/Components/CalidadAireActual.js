import React, { Component } from "react";




class AireActual extends Component{

 constructor(props) {
        super(props);

        this.state={
          loading:true,
          calidadActual:null,
          latitud:null,
          longitud:null
        };

        this.showPosition=this.showPosition.bind(this);
    }
async componentDidMount(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  else {
    console.log("Geolocation is not supported by this browser.");
    }
}
async showPosition(position){
  console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude);
    this.setState({latitud: position.coords.latitude});
    this.setState({longitud: position.coords.longitude})

  const url='https://api.waqi.info/feed/geo:'+this.latitud+';'+this.longitud+'/?token=dff319f47044fe2a774b924e794aead02b2d5e12'
  console.log('url'+url)
  const response=await fetch(url);
  const data=await response.json();
  console.log(data.data.aqi);
  this.setState({calidadActual: data.data})
  this.setState({loading:false})
}


render(){
  return(
    <div>
      {this.state.loading ? <div>Se esta cargando la informacion de la calidad del aire</div>:
        <div>
          Actualmente la calidad en su lugar actual es: {this.state.calidadActual.aqi}
        </div>}
    </div>
    )
  }
}

export default AireActual;