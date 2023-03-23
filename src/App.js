//import logo from './logo.svg';
import janine from './image/janine-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={janine} className="App-logo" alt="logo" />
        <p>
          Introduction:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello. I am Janine Christine M. Vallente. Nice to meet you!
        </a>
      </header>
    </div>
  );
}

export default App;
