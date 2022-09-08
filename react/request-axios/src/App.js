import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//GET --> https://api-airbnbclon.com/hosts --> Pedir TODAS las Hospedajes
//GET --> https://api-airbnbclon.com/hosts/:id --> Pedir UNA SOLA hospedaje
//POST --> https://api-airbnbclon.com/hosts --> Crear un solo recurso
//PUT --> https://api-airbnbclon.com/hosts/:id --> Actualizar un hospedaje
//DELETE --> https://api-airbnbclon.com/hosts/:id --> Eliminar un hospedaje 

function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //GET
    axios.get(`${process.env.REACT_APP_API_URL}posts`)
      .then((res) => {
        //entra si el status es entre 100 - 399 - positivo
        setPosts(res.data)
      }).catch((err) => {
        //entra si el status es entre 400 - 599 - negativo
        alert(`ups hay un error ${err.message}, comuniquese a servicio al cliente 31054897466`)
      }).finally(() => {
        //entra siempre
        setLoading(false)
      })
  }, [])


  //POST
  const sendPost = () => {
    axios.post(`${process.env.REACT_APP_API_URL}posts`,
      {
        title: "Clase http",
        body: "Cualquier cosa"
      }, {
      headers: {
        "Content-type": "application/json; charset=UTF=8",
      }
    })
  }

  //PUT

  //DELETE

  /*   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log("FETCH", json)) */


  return (
    <div className="App">
      <h1>Clase de HTTP y peticiones a un servidor</h1>
      <button onClick={sendPost}>Petición POST</button>
      {loading ? <p>Loading...</p> : posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
