
import Button from './components/Button';
import Counter from './components/Counter';
import Text from './components/Text';
import InputText from './components/InputText';
import Posts from './components/Posts';
import { INCREMENT, DECREMENT } from "./store/reducers/Count.reducer"
import './App.css';

//Principios
//  Almacenamiento centralizado
//  Estados predecibles
//  Debuggleable
//  Flexible


function App() {
  return (
    <div className="App">
      <h1>Configuración redux en nuestro proyecto</h1>
      <Counter />
      <Button type={INCREMENT}>Incrementar</Button>
      <Button type={DECREMENT}>Decrementar</Button>
      <Text />
      <InputText />
      <Posts />
    </div>
  );
}

export default App;
