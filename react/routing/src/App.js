import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/404';
import Vehicles from './pages/Vehicle';
import PrivatePage from './pages/PrivatePage';

// URL
// Protocolo - dominio - puerto - path - slug(opt) - query/search(opt)
// https://  makeitreal.camp :3000 / dashboard /  mazda / ?name=pepito&age=8&city=bogota 
function PrivateRoute({ children, pepito, isValid }) {
  console.log("PROPS:", pepito, isValid)
  const ticket = true;
  return ticket ? children : <Navigate to="/" />;
}

function App() {
  const [validHeader, setValidHeader] = React.useState(false)
  const location = useLocation()
  const paths = ["/", "/about", "/vehicles", "/private"];

  React.useEffect(() => {
    const result = paths.some(item => item === location.pathname)
    setValidHeader(result)
  }, [location]);

  return (
    <div className="App">
      {validHeader === true ? (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/vehicles">Vehiculos</Link>
          <Link to="/private">Página privada</Link>
        </nav>
      ) : null
      }
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/private' element={<PrivateRoute pepito={"Diego"} isValid={true}><PrivatePage /></PrivateRoute>} />
        <Route exact path='/vehicles' element={<Vehicles />}>
          <Route path=':brand' element={<Vehicles />}>
            <Route path=':model' element={<Vehicles />} />
          </Route>
        </Route>
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
