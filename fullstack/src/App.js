import logo from './logo.svg';
import './App.css';

function App() {
  const autos = [
    {
      name: "Mazda",
      model: "cx-3"
    }
    ,
    {
      name: "Mazda",
      model: "bt-50"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <li>
          El auto que me gusta es un {autos[0].name} {autos[0].model}
        </li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
