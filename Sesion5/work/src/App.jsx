import logo from './logo.svg';
import './App.css';
import FormListClass from './components/FormListClass'
import FormListHooks from './components/FormListHooks'
import { Counter } from './components/Counter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<FormListClass></FormListClass>*/}
        {/*<FormListHooks></FormListHooks>*/}
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
