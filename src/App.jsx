import { useState } from 'react'
import Header from './Components/Header'
import icono from './Images/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  // Para mostrar presupuesto
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
      isValid={isValid} setIsValid={setIsValid} />

      {/* Muestra el boton para agregar nuevo gasto */}
      {isValid && (<div className='nuevo-gasto'> <img src={icono} alt="Icono" /></div>)}

    </div>


  )
}

export default App
