import './App.css';
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <About />
        <h1 className="section-title">Portfolio</h1>
      <Portfolio />
    </div>
  );
}

export default App;
