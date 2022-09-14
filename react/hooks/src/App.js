import React, { useState, useEffect } from 'react';
import { useWindowSize } from './hooks/useWindowSize';
import './App.css';

function App() {
  const [width] = useWindowSize()
  console.log(width)
  // const [state, setState] = useState(123)
  /*   const [state, setState] = useState([])
    const [state, setState] = useState("")
    const [state, setState] = useState(false)
    const [state, setState] = useState({
      name: "Jhon",
      lastname: "Doe"
    })
    //Tengan cuidado si usan objeto como valor inicial, no lo vayan a mutar
    setState({...state, lastname: "Vasquez"}) */

  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  // Nunca vayan a condicionarlo de la siguiente manera:
  /*   if (count < 3) {
      const [result, setResult] = useState(false)
    } */
  const [name, setName] = useState(false)

  useEffect(() => {
    console.log("Esta es una función de busqueda")

    return () => console.log("Desmontaje")
  }, [count, done, name])



  const handleClick = () => {
    setCount(mainState => ++mainState)
  }

  //1. Los hooks solo se pueden utilizar dentro de otros hooks o componentes de react
  //2. Los hooks siempre se deben ejecutar en el mismo orden
  //3. Los hooks siempre se deben ejecutar en el primer nivel de la función (componente)
  //4. Los hooks siempre se nombran con el prefijo use

  return (
    <div className="App">
      <h1>Clase de hooks</h1>
      <button onClick={handleClick}>{count}</button>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="checkbox"
        /* 
          done = !false
          done = !verdadero
          done = false
        */
        onChange={() => setDone(mainState => !mainState)}
        checked={done}
      />

    </div>
  );
}

export default App;
