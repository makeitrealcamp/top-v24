import { useEffect, useRef } from "react"
import io from "socket.io-client"
import logo from './logo.svg';
import './App.css';


function App() {
  const ref = useRef()

  useEffect(() => {
    //const socket = io("http://localhost:8080")
    ref.current = io("http://localhost:8080")

    ref.current.on("welcome", (data) => {
      console.log("WELCOME:", data.message)
    })

    ref.current.on("broadcast", (data) => {
      console.log("BROADCAST:", data)
    })

    ref.current.on("private", (data) => {
      console.log("PRIVATE:", data)
    })

    return () => {
      ref.current.close()
      ref.current.removeAllListeners()
    }
  }, [])

  const handleEmit = () => {
    ref.current.emit("message", "Hola a todos")
  }

  const handleJoin = () => {
    ref.current.emit("join room", `privateroom${"ruben"}${"jairo"}`)
  }

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Clase de websockets</h1>
      <button onClick={handleEmit} >Enviar</button>
      <button onClick={handleJoin} >Unirme a sala privada</button>
    </div>
  );
}

export default App;
