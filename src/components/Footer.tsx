import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo color="text-white" />
            <p className="mt-4 text-gray-400">
              We create digital experiences that help businesses grow, innovate, and connect with their audience.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#web-dev" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#mobile-apps" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#design" className="text-gray-400 hover:text-white transition-colors duration-200">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#marketing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#strategy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#seo" className="text-gray-400 hover:text-white transition-colors duration-200">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <a href="mailto:hello@digiterra.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  hello@digiterra.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                <address className="text-gray-400 not-italic">
                  123 Innovation Street<br />
                  San Francisco, CA 94103
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Digiterra. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;