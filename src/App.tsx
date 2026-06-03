
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsSection from './components/ProjectsSection';
import InteractiveAudit from "./components/InteractiveAudit";
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

import "/public/assets/css/particles.css";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
    
      <Services />

      <ProjectsSection />
      <InteractiveAudit />
      <Testimonials />
      
      <Contact />
    
      <WhatsAppButton />
    </>
  );
};


export default App;
