import React from 'react';
import Paseo from './Paseo.js';

const Grupos =(props)=>{

  const renderPaseos = () => props.paseos.map(d => <Paseo key={d.nombre} nombre ={d.nombre} ruta = {d.ruta} fecha = {d.fecha} puntoEncuentro = {d.puntoEncuentro} numInscritas = {d.numInscritas} />)
	
  return(
      <div>
        <h1>Se esta mostrando Grupos</h1>
        <ul class="ListaPaseos">
        	{renderPaseos()}
        </ul>
      </div>
    )
}
export default Grupos;