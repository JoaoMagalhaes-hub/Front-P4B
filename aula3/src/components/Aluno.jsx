import React from 'react'

const Aluno = ({nome, email, curso}) => {
  const status = media >= 7 ? 'APROVADO' : 'REPROVADO';

  return (
    <div >
        <p> Nome: {nome}</p>
        <p> Email: {email}</p>
        <p> Curso: {curso}</p>
        <p> Média: {media.toFixed(2)}</p>
        <p>Status: {status}</p>
        <p> =================================== </p>


    </div>
  )
}

export default Aluno
