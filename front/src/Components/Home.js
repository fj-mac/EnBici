import React from 'react';
import  './Home.css'
import Aire from './CalidadAire'
import AireActual from './CalidadAireActual'


const Home =()=>{

  return(
    <div>
      <div className="jumbotron"/>
      	<h1>Bienvenidos a EnBici</h1>
        <div className="container">
      	 <Aire/>
         <AireActual/>
        </div>
    	</div>
    )
}
export default Home;