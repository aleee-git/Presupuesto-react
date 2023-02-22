import { useState } from 'react'
import Header from './Components/Header'
import icono from './Images/nuevo-gasto.svg'
import Ventana from './Components/Ventana';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  // Para mostrar presupuesto
  const [isValid, setIsValid] = useState(false);

  const [ventana, setVentana] = useState(false);
  const [animarVentana, setAnimarVentana] = useState(false);
  

  const handleGasto = () => {
    setVentana(true)

    setTimeout(() => {
      console.log("animando...")
      setAnimarVentana(true);
      // Despues de medio segundo mostrara la ventana
    }, 500);

    console.log('diste click')
  }

  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
      isValid={isValid} setIsValid={setIsValid} />

      {/* Muestra el boton para agregar nuevo gasto */}
      {isValid && (<div className='nuevo-gasto'> <img src={icono} alt="Icono" onClick={handleGasto} /></div>)}


      {ventana && <Ventana setVentana={setVentana} 
      animarVentana={animarVentana}
      setAnimarVentana={setAnimarVentana} />}
    </div>


  )
}

export default App
