import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative bg-[#0e0e12] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8245ec22,_transparent_60%)] opacity-30 pointer-events-none"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer /> 
       
      </div>
    </div>
  );
}

export default App;
