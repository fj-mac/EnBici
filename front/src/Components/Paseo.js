import React from 'react';
import './Paseo.css';

const Paseo =(props)=>{
	
  return(
      <div className = "container" id= "TablaPaseo">
      	<div className = "row">
      		<div className = "col-md-12">
						<p> {props.nombre} </p>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-8">
						<p> Ruta: {props.ruta} </p>
					</div>
					<div className = "col-md-4">
						<p> Participantes: {props.numInscritas} </p>
					</div>  
				</div>
				<div className = "row">
					<div className = "col-md-12">
						<p> Punto de Encuentro: {props.puntoEncuentro} </p>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-8">
						<p> Fecha: {props.fecha} </p>
					</div>
					{props.usuario !== "No hay usuario"?
					<div className = "col-md-4">
						<button id="BotonInscribirse"> Inscribirse </button>
					</div>:
					<div className = "col-md-4">
						<p> Debe iniciar sesión para inscribirse </p>
					</div>}
				</div>
      </div>
    )
}
export default Paseo;