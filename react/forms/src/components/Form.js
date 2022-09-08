import axios from "axios"
import { useState } from "react"

const Form = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [done, setDone] = useState(false)

  // const handleChange = (event) => {
  //   console.dir(event.target.value)
  //   setTitle(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Sus datos fueron enviados correctament")

    axios.post("https://jsonplaceholder.typicode.com/todos",
      { title, description, done }
    ).then((res) => {
      alert("Sus datos fueron enviados exitosamente")
      setTitle("")
      setDescription("")
      setDone(false)
    }).catch(() => {
      alert("No pudimos enviar sus datos")
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="description">Descripción</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <label htmlFor="done">Estas seguro?</label>
        <input
          id="done"
          name="done"
          type="checkbox"
          onChange={(event => done ? setDone(false) : setDone(true))}
          checked={done}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )

}

export default Form