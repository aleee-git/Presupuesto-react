import React from 'react';
import icono from '../Images/cerrar.svg';

export default function Ventana({setVentana}) {

    const ocultarVentana = () => {
        setVentana(false);
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={icono} alt="cerrar" onClick={ocultarVentana}/>
        </div>      
    </div>
  );
}
