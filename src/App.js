import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LabelBridge from './components/LabelBridge';
// import Footer from './components/Footer';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <Router>
      {/* Global Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/label-bridge" element={<LabelBridge />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App; 