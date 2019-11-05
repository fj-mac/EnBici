import React from 'react';
import './Paseo.css';

const Paseo =(props)=>{

	const inscribirse = () => {
		props.numInscritas < props.capacidad ? 
		fetch("/upDatePaseo", {
			method:"POST",
			body: {
				nombre: props.nombre,
				numInscritas: props.numInscritas,
			},
		}).then(console.log("Se inscribio")):
		console.log("Se acabaron los cupos");
	}
	
  return(
      <div className = "container TablaPaseo">
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
						<p> Cupos disponibles: {props.capacidad-props.numInscritas} </p>
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
						<button id="BotonInscribirse" onClick={inscribirse}> Inscribirse </button>
					</div>:
					<div className = "col-md-4">
						<p> Debe iniciar sesión para inscribirse </p>
					</div>}
				</div>
      </div>
    )
}
export default Paseo;