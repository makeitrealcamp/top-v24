import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import { gql, useQuery, useMutation } from "@apollo/client"

const GET_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!){
    createUser(name: $name, age: $age) {
      name
      age
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_USERS)
  const [createUser, user] = useMutation(CREATE_USER)
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  if (loading) return <p>Loading...</p>
  if (error) return <p>Ups! ocurrió un error</p>

  const handleSubmit = (e) => {
    e.preventDefault()

    createUser({
      variables: {
        name,
        age
      }
    })
  }

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Clase de graphql</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Edad:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Enviar datos:</button>
      </form>
      {data.users && data.users.map((item) => {
        return (
          <>
            <h2>{item.name}</h2>
            <h3>{item.age}</h3>
          </>
        )
      })}
    </div>
  );
}

export default App;
