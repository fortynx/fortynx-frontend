import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);




  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutMouseEnter = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 300);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "py-2 bg-white/80 dark:bg-black/85 backdrop-blur-lg border-gray-250/10 dark:border-gray-800/30 shadow-lg" 
          : "py-4 bg-white/90 dark:bg-black/90 md:bg-transparent md:border-transparent border-gray-250/10 dark:border-gray-800/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/images/fortynx-logo.png"
            alt="Fortynx Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-10 md:h-12"
            } w-auto`}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300 font-medium text-[16px] tracking-wide font-sans">
          
          {/* Home */}
          <li>
            <Link to="/" className="hover:text-orange-500 transition-colors duration-200">
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li
            className="relative group"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500 transition-colors duration-200">
              <span className="relative py-1">About</span>
              <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
            </div>

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border border-gray-200/20 dark:border-gray-800/40 rounded-xl shadow-xl transition-all duration-200 ease-out z-50 p-2 ${
                aboutOpen 
                  ? "opacity-100 translate-y-0 visible" 
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/about/mission"
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/50 hover:text-orange-500 transition-colors"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/vision"
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/50 hover:text-orange-500 transition-colors"
                  >
                    Our Vision
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Services Mega Menu */}
          <li
            className="relative group"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500 transition-colors duration-200">
              <span className="relative py-1">Services</span>
              <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
            </div>

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[920px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border border-gray-200/25 dark:border-gray-800/50 rounded-2xl shadow-2xl transition-all duration-250 ease-out z-50 p-8 grid grid-cols-3 gap-8 ${
                servicesOpen 
                  ? "opacity-100 translate-y-0 visible scale-100" 
                  : "opacity-0 -translate-y-2 invisible scale-[0.98]"
              }`}
            >
              {/* Web Development */}
              <div className="space-y-4">
                <div className="border-b border-orange-500/20 pb-2">
                  <h4 className="text-sm font-bold tracking-wider uppercase text-orange-500">
                    Web Development
                  </h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/service/custom-website-development" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">Custom Website Development</Link></li>
                  <li><Link to="/service/e-commerce-development" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">E-Commerce Development</Link></li>
                  <li><Link to="/service/web-application-development" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">Web Application Development</Link></li>
                  <li><Link to="/service/ui-ux-design" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">UI/UX Design</Link></li>
                  <li><Link to="/service/mobile-app-development" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">Mobile App Development</Link></li>
                  <li><Link to="/service/maintenance-optimization" className="text-gray-600 dark:text-gray-450 hover:text-orange-500 block transition">Maintenance & Optimization</Link></li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div className="space-y-4">
                <div className="border-b border-cyan-500/20 pb-2">
                  <h4 className="text-sm font-bold tracking-wider uppercase text-cyan-500">
                    Cybersecurity
                  </h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/service/penetration-testing-vapt" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Penetration Testing (VAPT)</Link></li>
                  <li><Link to="/service/vulnerability-assessment" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Vulnerability Assessment</Link></li>
                  <li><Link to="/service/web-application-audit" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Web Application Audit</Link></li>
                  <li><Link to="/service/network-security-testing" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Network Security Testing</Link></li>
                  <li><Link to="/service/cloud-security-assessment" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Cloud Security Assessment</Link></li>
                  <li><Link to="/service/incident-response-monitoring" className="text-gray-600 dark:text-gray-450 hover:text-cyan-500 block transition">Incident Response & Monitoring</Link></li>
                </ul>
              </div>

              {/* Digital Marketing */}
              <div className="space-y-4">
                <div className="border-b border-purple-500/20 pb-2">
                  <h4 className="text-sm font-bold tracking-wider uppercase text-purple-500">
                    Digital Marketing
                  </h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/service/search-engine-optimization-seo" className="text-gray-600 dark:text-gray-450 hover:text-purple-500 block transition">Search Engine Optimization (SEO)</Link></li>
                  <li><Link to="/service/social-media-marketing-smm" className="text-gray-600 dark:text-gray-450 hover:text-purple-500 block transition">Social Media Marketing (SMM)</Link></li>
                  <li><Link to="/service/pay-per-click-advertising-ppc" className="text-gray-600 dark:text-gray-450 hover:text-purple-500 block transition">Pay-Per-Click Advertising (PPC)</Link></li>
                  <li><Link to="/service/content-brand-strategy" className="text-gray-600 dark:text-gray-450 hover:text-purple-500 block transition">Content & Brand Strategy</Link></li>
                  <li><Link to="/service/email-marketing-campaigns" className="text-gray-600 dark:text-gray-450 hover:text-purple-500 block transition">Email Marketing Campaigns</Link></li>
                  <li><Link to="/service/lead-generation-analytics" className="text-gray-600 dark:text-gray-450 hover:text-purple-550 block transition">Lead Generation & Analytics</Link></li>
                </ul>
              </div>
            </div>
          </li>
          <li><Link to="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
          <li>
            <a
              href="https://institute.fortynx.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-orange-500/20 transition-all duration-200"
            >
              Fortynx Institute
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-150/10 dark:border-gray-900/50 px-6 py-6 space-y-4">
          <ul className="space-y-4 text-gray-750 dark:text-gray-300 font-semibold text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Home</Link></li>
            <li><Link to="/#services" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Services</Link></li>
            <li><Link to="/about/mission" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">About Our Mission</Link></li>
            <li><Link to="/about/vision" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">About Our Vision</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500 block">Contact</Link></li>
            <li className="pt-2">
              <a
                href="https://institute.fortynx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
              >
                Fortynx Institute
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
