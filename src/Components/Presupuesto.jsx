import React from 'react';

export default function Presupuesto({presupuesto, setPresupuesto}) {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className="campo">
            <label>Definir Presupuesto</label>
            <input value={presupuesto} onChange={(e)=> setPresupuesto(e.target.value)} 
            className='nuevo-presupuesto' type="text" />
        </div>
        <input type="submit" value="Añadir" />

      </form>
    </div>
  );
}
