import { useState } from "react";
import { useJwt } from "react-jwt";
import axios from "axios";


const Home = () => {
  const { isExpired } = useJwt(localStorage.getItem("token"));
  const [sesion, setSesion] = useState(isExpired)

  const logout = () => {
    setSesion(true)
    localStorage.clear();
  }

  const queryAuth = async () => {
    const dataUser = await axios.get("http://localhost:8080/",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
  }

  return (
    <>
      <h1>Home</h1>
      {!isExpired &&
        (
          <>
            <button onClick={() => logout()}>Cerrar sesión</button>
            <button onClick={() => queryAuth()}>Petición</button>
          </>
        )
      },

    </>
  );
};

export default Home;
