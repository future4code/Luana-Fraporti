import React from "react";


export default class Etapa1 extends React.Component () { 
  render (){
    return (
      <div>
        <h1> ETAPA 1 - DADOS GERAIS </h1>
        <ol>
          <li> Qual o seu Nome </li>
          <input type = "text"></input>
          <li> Qual a sua idade? </li>
          <input type = "text"></input>
          <li> Qual seu e-mail? </li>
          <input type = "text"></input>
          <li> Qual a sua escolaridade? </li>
          <select>
            <option>
             Ensino médio
            </option>
            <option>
              Ensino Superio
            </option>
            <option>
              Técnico 
            </option>
            <option>
              Fundamental
            </option>
          </select>
        </ol>
      </div>
    )}

    }

  