import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const Elemento = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 100px;
    height: 100px;
    width: 100px;
    margin-right: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-items: flex-start; `

    const Foto = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;`
    
    const Letra = styled.h4`
    margin-bottom: 10px;
    display: center; `


function CardGrande(props) {
    return (
        <Elemento>
            <Foto src={ props.imagem } />
            <div>
                <Letra>{ props.nome }</Letra>
                <p>{ props.descricao }</p>
            </div>
    </Elemento>
    )
}


export default CardGrande;