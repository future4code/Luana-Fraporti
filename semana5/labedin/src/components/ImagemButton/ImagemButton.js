import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';

const Elemento = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 400px;
    width: 600px;
    padding: 10px 20px;
    margin: 5px auto; 
    width: 100px;
    margin-right: 250px;`

    const Fotos = styled.img`
    width: 30px;
    margin-right: 10px;`

function ImagemButton(props) {
    return (
        <Elemento>
            <Fotos src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Elemento>

    )
}

export default ImagemButton;