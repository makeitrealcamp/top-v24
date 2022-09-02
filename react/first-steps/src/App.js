import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // JSX --> JavaScript and XML
  // Los componentes solo retornan un elemento
  // Todas las etiquetas se deben cerrar <></> </>
  // Nos permite ingresar JS pero entre {}
  // class --> className, for --> htmlFor

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;


// const _App = () => {
//   //Aquí va todo lo que 
//   //tiene que ver con lógica
//   return(
//     <>
//     </>
//   )
// } 