  
import React from 'react';
import Paseo from './Paseo.js';
import './Grupos.css';

const Grupos =(props)=>{

  const renderPaseos = () => props.paseos.map(d => 
  	<div>
			<Paseo key={d.nombre} usuario = {props.usuario} nombre ={d.nombre} ruta = {d.ruta} fecha = {d.fecha} puntoEncuentro = {d.puntoEncuentro} numInscritas = {d.numInscritas} />
			<br/>
  	</div>)
	
  return(
      <div>
        <div >
          <h1 className = "tituloGrupos">Rutas Actuales</h1>
          <br/>
        </div>
        <ul class="ListaPaseos">
        	{renderPaseos()}
        </ul>
      </div>
    )
}
export default Grupos;