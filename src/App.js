import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Toolbar from "./components/Toolbar";
import {Await, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Arena from "./pages/Arena";
import SocialMediaApp from "./pages/SocialMediaApp";

function App() {
  return (
    <div>
        <Toolbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/arena" element={<Arena />}/>
            <Route path="/portfolio/social-media-app" element={<SocialMediaApp />}/>
        </Routes>
    </div>
  );
}

export default App;
