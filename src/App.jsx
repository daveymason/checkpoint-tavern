import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatApp from './components/ChatApp';
import './App.css';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <ContactForm />
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
