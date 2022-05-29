import './App.css';
import Button from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics ] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
           numClics={numClics}
           />

        <Button
           texto='Click'
           esBotonDeClick={true}
           manejarClick={manejarClick}
           />

        <Button
           texto='Reiniciar'
           esBotonDeClick={false}
           manejarClick={reiniciarContador}
           />
      </div>
    </div>
    
  );
}

export default App;
