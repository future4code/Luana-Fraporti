import React from "react";
import Etapa1 from "./Componente/Etapa1";
import Etapa2 from "./Componente/Etapa2";
import Etapa3 from "./Componente/Etapa3";
import Final from "./Componente/Final";

class App extends React.Component {
 state = {
    etapa: 1,

  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return < Etapa1 />;
      case 2: 
        return < Etapa2 />;
        case 3: 
        return < Etapa3 />;
        case 4: 
        return < Final />;
    }
  }

  render () {
      return (
        <div>
          <button>Próxima Etapa</button>
        </div>
      );
    }
  }
export default App;
