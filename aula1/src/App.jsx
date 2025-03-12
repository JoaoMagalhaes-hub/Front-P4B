import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>

      <h1>Exercício 01 React</h1>

      <hr />

      <h2>Exercício 01</h2>

      <br /> <br />

      <Adicao num1 = {10} num2={11} />
      <Subtracao num1 ={49} num2={9} />
      <Multiplicacao num1={32} num2={6} />
      <Divisao num1 ={30} num2={2} />

      <br /> <br />

      <hr />

      <h2>Exercício 02</h2>

      <br /><br />
      <PrecisoEstudar nomeDaTecnologia="Vue3" />
    </div>
  )
}

export default App