import React from 'react'
import styled from 'styled-components'
import ComponenteUsuario from './components/IconeComContador/IconeComContador'
import ComponenteMensagem from './components/IconeComContador/IconeComContador' 

const MainContainer = styled.div`
  display: flex;
  justify-content: center;

`
const ContainerLayout = styled.div`
  display: flex;
  align-items: end;
  border: 1px solid black;
  background-color: #e9e9e9;
  width: 44vw;
  height: 99.6vh;

`
const InputUsuario = styled.input`
    width: 10vw;
    padding: 2px;

`
const InputMensagem = styled.input`
    flex-grow: 1;
    padding: 2px;
`

const BotaoEnviar = styled.button`
  width: 6vw;
  padding: 2px;

`

class App extends React.Component{

  state = {

    mensagens:[
      {
        nomeUsuario: "",
        mensagemUsuario: ""
      },

    ],
    valorInputNomeUsuario: "",
    valorInputMensagemUsuario: ""

  }

  adicionaMensagem = (event) => {
    event.preventDefault()
    const novaMensagem ={
      nomeUsuario: this.state.valorInputNomeUsuario,
      mensagemUsuario: this.state.valorInputMensagemUsuario
    };

    const copiaMensagem = [novaMensagem,...this.state.mensagens];

    this.setState({ mensagens: copiaMensagem });
    this.setState({
      valorInputNomeUsuario: "",
      valorInputMensagemUsuario: ""
    })
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagemUsuario: event.target.value });
  };

  render() {
    const arrayMensagensMap = this.state.mensagens.map((mensagem) => {
      return <p>{mensagem.nomeUsuario}: {mensagem.mensagemUsuario}</p>
    })

    return (
      <MainContainer>
        <ContainerLayout>
         
          <InputUsuario 
          ComponenteUsuario={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNome}
          placeholder={"Nome Usuário"}
          />

          <InputMensagem 
            value={this.state.valorInputMensagemUsuario}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />

          <BotaoEnviar onClick={this.adicionaMensagem}>Enviar</BotaoEnviar>

          {arrayMensagensMap}

        </ContainerLayout>
        
      </MainContainer>
    );
  }
}

export default App;
