import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'; 
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Router>
      <Header /> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail/>}/>
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;