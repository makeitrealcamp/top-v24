import { useContext, useState } from "react"
import { AuthContext } from "../store/AuthContext"

const Button = () => {
  const auth = useContext(AuthContext)
  const [dataUser, setDataUser] = useState("")

  return (
    <>
      <input
        type="text"
        onChange={(e) => setDataUser(e.target.value)}
        value={dataUser}
      />
      <button onClick={() => auth.handleLogin(dataUser)}>Iniciar Sesión</button>
    </>
  )
}

export default Button