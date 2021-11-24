import React from "react";


export default class Etapa3 extends React.Component () { 
  render (){
    return (
      <div>
                <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
        <ol>
          <li> Por que você não terminou um curso de graduação?  </li>
          <input type = "text"></input>
          <li> Você fez algum curso complementar </li>
          <select>
            <option>
              Nenhum
            </option>
            <option>
              Não quis
            </option>
            <option>
              Sem verba
            </option>
          </select>
        </ol>
      </div>
    )}

  }
