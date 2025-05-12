import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Header from "./components/Header";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header /> {/* Header yalnızca burada olmalı */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
