import React from 'react';
import Presupuesto from './Presupuesto';
import Control from './Control';

export default function Header({presupuesto, setPresupuesto, isValid, setIsValid}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {/* Condicional para mostrar componente */}
      {isValid ? 
      (<Control presupuesto={presupuesto}/>) : 
      (<Presupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
        setIsValid={setIsValid}/>)}

      
      
    </header>
  );
}
