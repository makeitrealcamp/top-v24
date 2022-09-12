import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import Gif from './pages/Gif';
import './App.css';

// Estructura de una URL
// https:// bellpi.com : 3000 / como-vender / mazda ? name=pepito
// protocolo - dominio - puerto - path - slug - query o params

//camelCase
//PascalCase
//kebab-case
//snake_case


// function PrivateRoute({ children }) {
//   const token = "23q45joqi3efj40qwefj";
//   return token ? children : <Navigate to="/" />
// }

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/gif'>Gif</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gif' element={<Gif />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
