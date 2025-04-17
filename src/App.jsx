import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import USP from './components/USP';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatApp from './components/ChatApp';
import VideoSection from './components/VideoSection';
import './App.css';

function HomePage() {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const uspRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Header onNavClick={(section) => {
        switch(section) {
          case 'about': scrollToSection(aboutRef); break;
          case 'features': scrollToSection(featuresRef); break;
          case 'usp': scrollToSection(uspRef); break;
          case 'contact': scrollToSection(contactRef); break;
          default: break;
        }
      }} />
      <Hero />
      <VideoSection />
      <Box ref={aboutRef}><About /></Box>
      <Box ref={featuresRef}><Features /></Box>
      <Box ref={uspRef}><USP /></Box>
      <Box ref={contactRef}><ContactForm /></Box>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </Router>
  );
}

export default App;
