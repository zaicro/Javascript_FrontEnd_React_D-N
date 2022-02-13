import logo from './logo.svg';
import './App.css';
import { FormListHooks } from './components/Eje1_Hook/FormListHooks'
import { Index } from './components/Eje2/index'
import { Header } from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom';
import { PlanReact } from './components/PlanReact'
import { PlanRedux } from './components/PlanRedux'
import { RUTAS } from './helpers/constants'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<FormListHooks />*/}
        {/*<Index />*/}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={RUTAS.planReact} component={PlanReact} />
            <Route exact path={RUTAS.planRedux} component={PlanRedux} />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
