import React from 'react';


const Paseo =(props)=>{
	
  return(
      <div>
        <h2> {props.nombre} </h2>
        <p> Ruta: {props.ruta} </p> 
        <p>{props.numInscritas} </p>
        <p>{props.puntoEncuentro} </p>
        <p>{props.fecha} </p>
        <br/>
      </div>
    )
}
export default Paseo;