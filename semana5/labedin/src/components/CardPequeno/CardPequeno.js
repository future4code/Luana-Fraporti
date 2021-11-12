import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="bigcard-containers">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome}</h4>
            </div>
        </div>
    )
}

export default CardPequeno;