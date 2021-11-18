import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Diego'}
          fotoUsuario={'https://picsum.photos/seed/picsum/200/300'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />
        <Post
          nomeUsuario={'Dijalma'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150?grayscale'}
        />
      </MainContainer>
    );
  }
}

export default App;
