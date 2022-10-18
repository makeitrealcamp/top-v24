import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Button type={"button"} title={"Ingresar"}>
        Enviar
      </Button>
      <Form />
    </div>
  );
}

export default App;
