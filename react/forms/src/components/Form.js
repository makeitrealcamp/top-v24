import axios from "axios"
import { useState } from "react"

const Form = () => {
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")
  // const [done, setDone] = useState(false)

  const [data, setData] = useState({
    title: "",
    description: "",
    done: false,
  })
  const [message, setMessage] = useState("")



  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setMessage("")

    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/todos", data
    ).then((res) => {
      setMessage("Post creado con éxito")
      setData({
        title: "",
        description: "",
        done: false,
      })
    }).catch(() => {
      alert("No pudimos enviar sus datos")
    })

  }
  const { title, description, done } = data

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(e) => handleChange(e)}
          value={title}
          required
        />
        <label htmlFor="description">Descripción</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={(e) => handleChange(e)}
          value={description}
          required
        />
        <label htmlFor="done">Estas seguro?</label>
        <input
          id="done"
          name="done"
          type="checkbox"
          onChange={(e) => handleChange(e)}
          checked={done}
        />
        <button type="submit" disabled={!done}>Enviar</button>
      </form>
      {message && message}
    </>
  )

}

export default Form