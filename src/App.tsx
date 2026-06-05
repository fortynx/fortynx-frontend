
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsSection from './components/ProjectsSection';
import InteractiveAudit from "./components/InteractiveAudit";
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import SEO from "./components/SEO";

import "/public/assets/css/particles.css";

const App: React.FC = () => {
  return (
    <>
      <SEO 
        title="Fortynx – Best Web Development & Top Digital Marketing in Vijaywada & Hyderabad"
        description="Fortynx provides the best web development services and top digital marketing solutions in Vijaywada and Hyderabad. Connect with us for high-ROI SEO, PPC, and secure custom React/Django app development."
        keywords="best digital marketing in vijaywada, best digital marketing in hyderabad, top digital marketing in vijaywada, top digital marketing in hyderabad, web development best in vijaywada, web development best in hyderabad, best web development in vijayawada, best web development in hyderabad, top web development in vijaywada, top web development in hyderabad, digital marketing best in vijaywada, digital marketing best in hyderabad, best technology agency in vijaywada, top marketing agency in hyderabad, Fortynx, cybersecurity, VAPT, web development, digital marketing, SEO, PPC, social media marketing, secure websites, React, Django"
        ogUrl="https://fortynx.com"
      />
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
