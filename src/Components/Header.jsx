import React from 'react';
import Presupuesto from './Presupuesto';

export default function Header({presupuesto, setPresupuesto}) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      
      <Presupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto}/>
    </header>
  );
}
