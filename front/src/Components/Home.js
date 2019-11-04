import React from 'react';
import  './Home.css'
import Aire from './CalidadAire'
import AireActual from './CalidadAireActual'
import Actual from './Actual'
import Tabla from './Tabla'
import Instrucciones from './Instrucciones'
const Home =()=>{

  return(
    <div>
      <div className="jumbotron"/>


        <div className="container">
      	<h1 className = "tituloHome">Bienvenidos a EnBici</h1>
      	 <Aire/>
         <AireActual/>
         <Tabla/>
         <Instrucciones/>
        </div>

    	</div>
    )
}
export default Home;