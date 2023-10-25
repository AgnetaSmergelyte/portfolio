import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Toolbar from "./components/Toolbar";
import {Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div>
        <Toolbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;
