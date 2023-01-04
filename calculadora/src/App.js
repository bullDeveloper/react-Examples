import './App.css';
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla.jsx'
import BotonClear from './componentes/BotonClear.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = val =>{
    setInput(input + val);
  }

  const calculateResult =()=>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  }

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic = {addInput}>1</Boton>
          <Boton manejarClic = {addInput}>2</Boton>
          <Boton manejarClic = {addInput}>3</Boton>
          <Boton manejarClic = {addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {addInput}>4</Boton>
          <Boton manejarClic = {addInput}>5</Boton>
          <Boton manejarClic = {addInput}>6</Boton>
          <Boton manejarClic = {addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {addInput}>7</Boton>
          <Boton manejarClic = {addInput}>8</Boton>
          <Boton manejarClic = {addInput}>9</Boton>
          <Boton manejarClic = {addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calculateResult}>=</Boton>
          <Boton manejarClic = {addInput}>0</Boton>
          <Boton manejarClic = {addInput}>.</Boton>
          <Boton manejarClic = {addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
