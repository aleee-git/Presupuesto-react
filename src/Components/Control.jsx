import React from 'react';

export default function Control({presupuesto}) {

    //Funcion para el formato del dinero
    const formato =(cantidad) =>{
        return cantidad.toLocaleString ( 'en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>Grafica</div>
      <div className='control contenedor-presupuesto'>
        <p><span>Presupuesto: </span>{formato(presupuesto)}</p>
        <p><span>Disponible: </span>{formato(0)}</p>
        <p><span>Gastado: </span>{formato(0)}</p>

      </div>
    </div>
  );
}
