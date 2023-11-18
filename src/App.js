import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Toolbar from "./components/Toolbar";
import {Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Arena from "./pages/Arena";
import SocialMediaApp from "./pages/SocialMediaApp";
import React from "react";
import GoUp from "./components/GoUp";
import { Helmet } from 'react-helmet';
import profilePic from './images/profile-pic.png';

function App() {
    return (
        <div>
            <Helmet>
                <title>Agneta Šmergelytė</title>
                <meta name="description" content="Web Developer Portfolio" />
                <meta property="og:title" content="Agneta Šmergelytė" />
                <meta property="og:description" content="Web Developer Portfolio" />
                <meta property="og:image" content={profilePic} />
                <meta property="og:url" content="https://www.agnetasmergelyte.lt/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Toolbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/portfolio/arena" element={<Arena/>}/>
                <Route path="/portfolio/social-media-app" element={<SocialMediaApp/>}/>
            </Routes>
            <GoUp/>
        </div>
    );
}

export default App;
