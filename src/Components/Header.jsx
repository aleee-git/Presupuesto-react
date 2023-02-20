import React from 'react';
import Presupuesto from './Presupuesto';

export default function Header({presupuesto, setPresupuesto, isValid, setIsValid}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {/* Condicional para mostrar componente */}
      {isValid ? 
      (<p>Control</p>) : 
      (<Presupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
        setIsValid={setIsValid}/>)}

      
      
    </header>
  );
}
