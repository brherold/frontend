import logo from './logo.svg';
import './App.css';

function App() {
  function getData(val){
    console.warn(val.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Type an Artist Name
        </h1>
        <input type="text" onChange={getData}/> 
      </header>
    </div>
  );
}

export default App;
