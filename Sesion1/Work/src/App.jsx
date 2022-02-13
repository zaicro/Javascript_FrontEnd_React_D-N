import React from "react";
import './App.css';
import Foco from './Components/Foco';
import FocoRect from './Components/FocoRect';

/*
Reto
- que son los props
- completar ejecicio con luces largas arriba y abajo
*/


function App() {
  return (
    <div className="techo">
      <FocoRect/>
      <Foco/>
      <Foco/>
      <FocoRect/>      
    </div>
  );
}

/*
import MiPrimerComponente from './MiPrimerComponente'
function App() {
  return (
    <div className="App">
          Hola Mundos desde React - D&amp;N
          <MiPrimerComponente />
    </div>
  );
}
*/
export default App;
