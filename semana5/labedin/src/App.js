import React, { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotolu from './components/CardGrande/fotolu.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {fotolu}
          nome="Luana Silveira Fraporti" 
          descricao="Meu nome é Luana, estou iniciando na area DEV, quero realmente aprender e a me desenvolver mais nessa área. Amo estar com os bichinhos, dançar qualquer musica e claro fazer um churras com os amigos e família."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno 
          imagem="https://www.pngkit.com/png/detail/9-95364_email-png-icons-jpg-royalty-free-stock-e.png" 
          nome="E-mail: luanasfraporti@gmail.com" 
  
        />
        <CardPequeno 
          imagem="https://stringfixer.com/files/1315755.jpg" 
          nome="Endereço: Sapucaia do Sul" 
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />   

        <ImagemButton 
          imagem="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
          texto="Linkedin" 
        />      
      </div>
    </div>
  );
}

export default App;
