import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
        {nome: "Joao", email:"joao@gmail.com", curso:"Sistemas para internet"},
        {nome: "Maria", email:"maria@gmail.com", curso:"Sistemas de Informação"},
        {nome: "Kellyane", email:"kellyane@gmail.com", curso:"Sistemas para internet"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
        )
      }

    </div>

      
  )
}

export default App
