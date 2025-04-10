import React from 'react'

const Campanha = () => {

    function definirMensagem(mes) {
        if (mes ==="setembro"){
            return "Prevenção ao suicidio"
        } else if (mes === "outubro"){
            return "Conscientização sobre o câncer de mama"
        } else if (mes === "novembro"){
            return "Conscientização e combate ao câncer de prostata"
        }
    }

    function definirCor(mes){
        if (mes === "setembro"){
            return StyleSheet.setembro
    }  else if (mes === "outubro"){
            return StyleSheet.outubro
    } else if (mes === "novembro"){
        return StyleSheet.novembro
    }
}

  return (
    <div className=>
       Campanha
    </div>
  )
}

export default Campanha
