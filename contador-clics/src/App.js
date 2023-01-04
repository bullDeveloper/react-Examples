import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.jpg';
import {useState} from 'react';


function App() {

  const[numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    console.log("Clic");
    setNumClics(numClics + 1);
  }

  //Hooks
  const reiniciarContador = () =>{
    console.log("Reiniciar");
    setNumClics(numClics * 0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotondeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotondeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
