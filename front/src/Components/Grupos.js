import React from 'react';


const Grupos =(props)=>{


  const renderDocs = () => props.paseos.map(d => <div key={d.nombre}>{d.nombre} </div>)
	
	
	
  return(
      <div>
        <h1>Se esta mostrando Grupos</h1>
        {renderDocs()}
      </div>
    )
}
export default Grupos;