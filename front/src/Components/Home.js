import React from 'react';
import  './Home.css'
import Aire from './CalidadAire'
import AireActual from './CalidadAireActual'
import Actual from './Actual'
import Tabla from './Tabla'

const Home =()=>{

  return(
    <div>
      <div className="jumbotron"/>
      	<h1>Bienvenidos a EnBici</h1>

      	 <Aire/>
         <AireActual/>
         <Actual/>
         <Tabla/>

    	</div>
    )
}
export default Home;