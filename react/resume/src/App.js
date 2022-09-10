import Button from './components/Button';
import Count from './components/Count';
import { useState } from 'react';
import './App.css';

function App() {

  //let count = 0;
  const [count, setCount] = useState(0) //Estado
  const [theme, setTheme] = useState(false)

  //JSX ---> JavaScript and XML´
  // Solo retorna un Elemento
  // class y el for --> className y htmlFor
  // Podemos ingresar lógica entre {}
  // Los elementos se deben cerrar siempre </> <></>


  return (
    <div className={theme ? "darkStyle" : "ligthStyle"}>
      <h1>Clase de reumen sprint 3</h1>
      <Count
        count={count}
      />
      <Button
        setCount={setCount}
        count={count}>Clickeame!!
      </Button>
      <button
        onClick={() => theme ? setTheme(false) : setTheme(true)}
      >Tema</button>
    </div>
  );
}

export default App;
