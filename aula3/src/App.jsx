import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
        {nome: "Joao", email:"joao@gmail.com", curso:"Sistemas para internet", media:10},
        {nome: "Maria", email:"maria@gmail.com", curso:"Sistemas de Informação", media:9.6},
        {nome: "Kellyane", email:"kellyane@gmail.com", curso:"Sistemas para internet", media:7.0}
        ].map((aluno, index) => 
          <Aluno key={index} nome={aluno.nome} email={aluno.email} curso={aluno.curso}  media={aluno.media}
          />
        )}
      </div>
    );
  };

export default App
