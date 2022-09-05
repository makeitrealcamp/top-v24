import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1>Ups algo salió mal</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default NotFound