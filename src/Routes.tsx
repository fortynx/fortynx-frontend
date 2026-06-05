import { Routes, Route } from "react-router-dom";

import App from "./App";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import MainLayout from "./layout/MainLayout";

// Components for About section
import About from './components/About';
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';

// Import your new pages
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import ScrollToTop from "./components/ScrollToTop";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="services" element={<Services isPage />} />
          <Route path="service/:slug" element={<ServiceDetail />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />

          {/* About pages */}
          <Route path="about" element={<About isPage />} />
          <Route path="about/mission" element={<Mission />} />
          <Route path="about/vision" element={<Vision />} />

          {/* Other routes */}
          <Route path="contact" element={<Contact isPage />} />
          <Route path="projects" element={<ProjectsSection showAll isPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
