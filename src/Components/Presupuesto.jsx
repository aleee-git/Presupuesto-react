import {Children, React, useState} from 'react';
import Mensaje from './Mensaje';

export default function Presupuesto({presupuesto, setPresupuesto}) {

  const [mensaje, setMensaje] = useState ("");
  
  // Funcion para validar input
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es valido tilin')
      return
    }
    // Resetear mensaje
    setMensaje('')
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className="campo">
            <label>Definir Presupuesto</label>
            <input value={presupuesto} onChange={(e)=> setPresupuesto(Number(e.target.value))} 
            className='nuevo-presupuesto' type="number" />
        </div>
        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje>{mensaje}</Mensaje>}

      </form>
    </div>
  );
}
