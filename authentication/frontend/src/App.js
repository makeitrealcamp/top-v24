import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { useJwt } from "react-jwt";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/Private";

function PrivateRoute({ children }) {
  const { isExpired } = useJwt(localStorage.getItem("token"));
  const auth = isExpired
  return !auth ? children : <Navigate to="/" />;
}

function App() {

  //localStorage
  //sesionStorage
  //cookies
  // localStorage.setItem("email", "esteban@test.com")
  // localStorage.setItem("age", 25)
  // localStorage.setItem("working", true)
  // localStorage.setItem("skills", JSON.stringify(["clean code", "resolution problems"]))
  // localStorage.setItem("Object", JSON.stringify({ name: "esteban" }))

  // sessionStorage.setItem
  // sessionStorage.getItem
  //console.log("data local storage", typeof localStorage.getItem("Object"))



  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/private">Private</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<PrivateRoute>< Private /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

