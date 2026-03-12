import { Routes, Route } from "react-router-dom";

import App from "./App";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import MainLayout from "./layout/MainLayout";
import Blog from './pages/Blog';

// Components for About section
import About from './components/About';
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';

// Import your new pages
import Mission from './pages/Mission';
import Vision from './pages/Vision';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:slug" element={<ServiceDetail />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="blog" element={<Blog />} />

        {/* About pages */}
        <Route path="about" element={<div className="pt-20"><About /></div>} />
        <Route path="about/mission" element={<div className="pt-20"><Mission /></div>} />
        <Route path="about/vision" element={<div className="pt-20"><Vision /></div>} />

        {/* Other routes */}
        <Route path="contact" element={<div className="pt-20"><Contact /></div>} />
        <Route path="projects" element={<div className="pt-20"><ProjectsSection showAll /></div>} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
