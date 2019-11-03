  
import React from 'react';
import Paseo from './Paseo.js';

const Grupos =(props)=>{

  const renderPaseos = () => props.paseos.map(d => 
  	<div>
			<Paseo key={d.nombre} nombre ={d.nombre} ruta = {d.ruta} fecha = {d.fecha} puntoEncuentro = {d.puntoEncuentro} numInscritas = {d.numInscritas} />
			<br/>
  	</div>)
	
  return(
      <div>
        <h1>Rutas Actuales</h1>
        <ul class="ListaPaseos">
        	{renderPaseos()}
        </ul>
      </div>
    )
}
export default Grupos;