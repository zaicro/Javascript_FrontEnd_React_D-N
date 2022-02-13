import logo from './logo.svg';
import './App.css';
import ContadorHooks from './ContadorHooks/Contador';
import Form from './Formulario/Form';
import Form_2 from './Formulario/Form_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContadorHooks></ContadorHooks>
        <Form></Form>
        <Form_2></Form_2>
      </header>
    </div>
  );
}

export default App;
