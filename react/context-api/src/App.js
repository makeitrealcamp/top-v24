import { AuthProvider } from './store/AuthContext';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Button />
    </AuthProvider>
  );
}

export default App;
