import React from 'react';
import icono from '../Images/cerrar.svg';

export default function Ventana({setVentana, animarVentana, setAnimarVentana}) {

    const ocultarVentana = () => {
        setAnimarVentana(false);

        setTimeout(() => {        
          setVentana(false);
        }, 500);
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={icono} alt="cerrar" onClick={ocultarVentana}/>
        </div>   
        <form className={`formulario ${animarVentana ? "anima" : "cerrar" }`}>
          <legend>Nuevo Gasto</legend>
        </form>   
    </div>
  );
}
