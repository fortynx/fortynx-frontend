import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


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
      className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-3"
      }`}
    >
      <div className="w-full px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/assets/images/fortynx-logo.png"
            alt="Fortynx Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-12"
            } w-auto`}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 dark:text-gray-300 font-semibold text-xl">

          {/* About Dropdown */}
          <li
            className="relative group"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
                About
              </span>
              <ChevronDown size={18} />
            </div>

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-gray-900 rounded shadow-lg transition-opacity duration-200 ease-in-out z-50 p-4 ${
                aboutOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about/mission"
                    className="block px-4 py-2 rounded-md hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="/about/vision"
                    className="block px-4 py-2 rounded-md hover:bg-orange-100 dark:hover:bg-orange-900 transition"
                  >
                    Our Vision
                  </a>
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
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
                Services
              </span>
              <ChevronDown size={18} />
            </div>

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[750px] bg-white dark:bg-gray-900 rounded shadow-lg transition-opacity duration-200 ease-in-out z-50 p-8 grid grid-cols-2 gap-10 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* Web Development */}
              <div>
                <h4 className="text-lg font-bold mb-3 text-black dark:text-white">
                  Web Development
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/#services" className="hover:text-orange-500">Custom Website Development</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">E-Commerce Development</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Web Application Development</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">UI/UX Design</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Mobile app Development</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Website Maintenance & Optimization</a></li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div>
                <h4 className="text-lg font-bold mb-3 text-black dark:text-white">
                  Cybersecurity
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/#services" className="hover:text-orange-500">Penetration Testing</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Vulnerability Assessment</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Web Application Security Audit</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Network Security Testing</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Cloud Security Assessment</a></li>
                  <li><a href="/#services" className="hover:text-orange-500">Security Monitoring & Incident Response</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
          <li><a href="/projects" className="hover:text-orange-500">Projects</a></li>
          <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-6">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-semibold text-lg">

            <li><a href="/">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/about/mission">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
