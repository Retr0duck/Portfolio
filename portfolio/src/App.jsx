import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Sections/AboutMe';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
