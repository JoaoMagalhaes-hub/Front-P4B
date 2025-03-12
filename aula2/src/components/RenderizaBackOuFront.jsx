import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaFrontOuBack(oFrontOuBack){
        if (oFrontOuBack === "Java"){
            return<h1> back  </h1>
        } else if (oFrontOuback === "AWS") {
            return<b><i> Rede </i></b>
        } else if (oFrontOuBack === "React") {
            return <b> front  </b>
        }
    
    }

  return (
    <div>
        <h1> Exercício 1</h1>
         {escolhaFrontOuBack("Java")}
         <br></br>
         {escolhaFrontOuBack("AWS")}
         <br></br>
         {escolhaFrontOuBack("React")}    
      
    </div>
  )
}

export default RenderizaBackOuFront
