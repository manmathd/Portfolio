import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      minHeight: '100vh', 
      paddingTop: '60px', // Account for fixed navbar
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Navbar />
      
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
