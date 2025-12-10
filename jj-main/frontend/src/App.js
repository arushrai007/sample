import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FallingLights from "./components/FallingLights";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App min-h-screen bg-[#111113] relative">
      <BrowserRouter>
        {/* Background Effects */}
        <div className="moving-grid" />
        <FallingLights />
        <div className="noise-overlay" />
        
        {/* Main Content */}
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/jobs" element={<ComingSoon title="Job Search" />} />
            <Route path="/resume-builder" element={<ComingSoon title="Resume Builder" />} />
            <Route path="/salary-predictor" element={<ComingSoon title="Salary Predictor" />} />
            <Route path="/ats-calculator" element={<ComingSoon title="ATS Calculator" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// Temporary Coming Soon Component
const ComingSoon = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-[#A1A1AA]">Full feature page coming soon...</p>
    </div>
  </div>
);

export default App;
