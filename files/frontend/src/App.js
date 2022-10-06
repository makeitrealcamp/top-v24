import { useState } from "react"
import axios from "axios"
import './App.css';

function App() {
  const [username, setUsername] = useState("")
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("username", username)
    for (let i = 0; i < file.length; i++) {
      data.append(`file_${i}`, file[i], file[i].name)
    }

    const res = await axios.post("http://localhost:8080/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )

    console.log(res)
  }

  const readFile = (file) => {
    const reader = new FileReader()

    reader.onload = (e) => setImage(e.target.result)
    //reader.onload = (e) => console.log(e.target.result)

    reader.readAsDataURL(file)
  }

  const handleChange = (event) => {
    //console.dir(event.target.files[0])
    //readFile(event.target.files[0])
    setFile(event.target.files)
  }

  return (
    <div className="App">
      <h1>Clase de envío de archivos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          accept="image/*"
          multiple
          name="file"
          id="file"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {!!image && <img src={image} alt="upload preview" />}
    </div>
  );
}

export default App;
