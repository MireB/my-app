import logo from "./logo.svg";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create React App👩🏼‍💻</h1>
        <WeatherApp city="Oslo" />
      </header>
    </div>
  );
}

export default App;
