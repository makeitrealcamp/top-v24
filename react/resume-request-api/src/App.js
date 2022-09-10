import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/404';
import Private from './pages/Private';
import './App.css';

// Estructura de una URL
// https:// bellpi.com : 3000 / como-vender / mazda ? name=pepito
// protocolo - dominio - puerto - path - slug - query o params

//camelCase
//PascalCase
//kebab-case
//snake_case


function PrivateRoute({ children }) {
  const token = "23q45joqi3efj40qwefj";
  return token ? children : <Navigate to="/" />
}

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/product'>Producto</Link>
        <Link to='/private'>Private</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />}>
          <Route path=':brand' element={<Product />} />
        </Route>
        <Route path='/private' element={<PrivateRoute><Private /></PrivateRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
