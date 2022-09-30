import { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

const Login = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [infoUser, setInfoUser] = useState(undefined)

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/auth/local/signin", user)
      localStorage.setItem("token", data.data.token)
      cookies.set('tokenCookie', data.data.token);
      localStorage.setItem("email", data.data.email)
      const dataUser = await axios.get("http://localhost:8080/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
      setInfoUser({
        name: dataUser.data.name,
        city: dataUser.data.city,
        age: dataUser.data.age
      })

    } catch (err) {
      alert("Ups! ocurrió algo en el login")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <button>Login</button>
      </form>
      {infoUser && (
        <>
          <p>{infoUser.name}</p>
          <p>{infoUser.city}</p>
          <p>{infoUser.age}</p>
        </>
      )}
    </>
  );
};

export default Login;
