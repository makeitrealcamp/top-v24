import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1>Ups ocurrió un error</h1>
      <Link to="/">Ir al home</Link>
    </>
  )
}

export default NotFound