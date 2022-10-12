import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Repaso de redux</h1>
      <Posts></Posts>
    </div>
  );
}

export default App;
