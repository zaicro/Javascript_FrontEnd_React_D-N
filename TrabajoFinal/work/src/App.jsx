import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { OpcionesMenu } from './helpers/constants'
import Series from './components/Series'
import Peliculas from './components/Peliculas'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Route exact path={OpcionesMenu[1].url} component={Series} />
          <Route exact path={OpcionesMenu[2].url} component={Peliculas} />
      </BrowserRouter>
    </div>
  );
}

export default App;
