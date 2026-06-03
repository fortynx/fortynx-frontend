import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-900">
        
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-4 space-y-6">
          <a href="/" className="inline-block">
            <img
              src="/assets/images/fortynx-logo.png"
              alt="Fortynx Logo"
              className="h-10 w-auto"
            />
          </a>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Fortynx is a premier technology agency helping enterprises build fast websites, run robust security audits, and deploy high-ROI marketing strategies.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-3.5 pt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 font-heading">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/" className="hover:text-orange-500 transition duration-150">Home Page</a>
            </li>
            <li>
              <a href="/about/mission" className="hover:text-orange-500 transition duration-150">Our Mission</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-500 transition duration-150">Featured Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500 transition duration-150">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 font-heading">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/#services" className="hover:text-orange-500 transition duration-150">Web App Development</a>
            </li>
            <li>
              <a href="/#services" className="hover:text-orange-500 transition duration-150">Penetration Testing (VAPT)</a>
            </li>
            <li>
              <a href="/#services" className="hover:text-orange-500 transition duration-150">Cloud Security Assessment</a>
            </li>
            <li>
              <a href="/#services" className="hover:text-orange-500 transition duration-150">Search Engine Optimization</a>
            </li>
            <li>
              <a href="/#services" className="hover:text-orange-500 transition duration-150">Pay-Per-Click Advertising</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 font-heading">
            Corporate HQ
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-orange-500 mt-1 shrink-0" />
              <span className="leading-relaxed text-gray-500">
                Opposite Trendset Mall, Benz Circle, Vijayawada, AP - 520010
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-cyan-500 shrink-0" />
              <a href="tel:+917901247450" className="hover:text-orange-500 transition font-semibold text-gray-300">
                +91 7901247450
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-purple-500 shrink-0" />
              <a href="mailto:info@fortynx.com" className="hover:text-orange-500 transition text-gray-300">
                info@fortynx.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom section (Copyright & policies) */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <div>
          <p>&copy; {new Date().getFullYear()} Fortynx Technologies. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="/privacy-policy" className="hover:text-orange-500 transition">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:text-orange-500 transition">Terms of Use</a>
          <a href="/disclaimer" className="hover:text-orange-500 transition">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
