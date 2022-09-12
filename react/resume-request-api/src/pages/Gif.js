import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"


const Gif = () => {
  const [dataGif, setDataGif] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=isXFaQG3Vh6FINAjEMGE94cfIk6RBcO6&q=cats&limit=25&offset=0&rating=g&lang=en')
      .then(({ data }) => {
        console.log('Respuesta:', data.data)
        setDataGif(data.data)
      }).catch((err) => {
        alert("Ups!!! ocurrió un error")
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1 className="pageGif-title"> Estos son los GIF del top 24</h1>
      <input
        type="text"
      />
      <button >Buscar</button>
      {loading ? <p>Loading...</p> : dataGif.map((item) => {
        return (
          <Card key={item.id} gif={item} />
        )
      })}
    </>
  )
}

export default Gif