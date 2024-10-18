import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <object type="image/svg+xml" data={logo}  className="App-logo" alt="logo" ></object>
        <p className='text'>
          "Brewing one cup at time"
        </p>
      </header>
    </div>
  );
}

export default App;
