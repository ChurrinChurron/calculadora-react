import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'
import Boton from './componentes/Boton'
import Clear from './componentes/Clear'
import Pantalla from './componentes/Pantalla'

function App() {

const [input, setInput] = useState("");

const agregarInput = valor => {

  setInput(input + valor)
}

const delInput = () => {

  setInput(input.slice(0, -1));
}

const eliminarInput = () => {

  setInput('');
}

const calcularResultado = () => {

  if(input) {

    setInput(evaluate(input));
  } else {

    alert('no nao!');
  }

}

  return (
    <>
      <h1>Calculator App</h1>
      <div className='calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={delInput}>DEL</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
          <Boton manejarClick={agregarInput}>x</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClick={eliminarInput}>RESET</Clear>
          <Boton manejarClick={calcularResultado}>=</Boton>
        </div>
      </div>
    </>
  )
}

export default App
