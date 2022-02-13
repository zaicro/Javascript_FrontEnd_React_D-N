import './App.css';
import { Header } from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanReact from './components/PlanReact'
import PlanRedux from './components/PlanRedux'
import { SubTemaHook } from './components/SubTemaHook'
import { SubTemaViejo } from './components/SubTemaViejo'
import { RUTAS } from './helpers/constants'

function App() {
  return (
    <div className="App-menu">
      <BrowserRouter>
        <Header />
        <Route exact path={RUTAS.planReact} component={PlanReact} />
        <Route exact path={`${RUTAS.planReact}/:subtema`} component={SubTemaHook} />
        <Route exact path={RUTAS.planRedux} component={PlanRedux} />
        <Route exact path={`${RUTAS.planRedux}/:subtema`} component={SubTemaViejo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
