import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Search, Menu, X, ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Finzo layout ke hisab se aapke puraane links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SIP Calculator", path: "/calculator" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full bg-white border-b border-slate-100 z-50 font-sans shadow-sm">
      
      {/* 1. TOP BAR (Utility Bar) - Laptop/Desktop par dikhega */}
      <div className="w-full border-b border-gray-100 py-2.5 px-4 md:px-8 text-sm text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left Side: Contact Info with custom sliding underline */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@gmail.com" 
              className="group flex items-center space-x-2 text-[#0b2b26] relative py-1"
            >
              <Mail className="w-4 h-4 text-[#0b2b26]" />
              <span className="relative">
                hello@gmail.com
                {/* Left to right sliding underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0b2b26] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            
            <a 
              href="tel:+911234567890" 
              className="group flex items-center space-x-2 text-[#0b2b26] relative py-1"
            >
              <Phone className="w-4 h-4 text-[#0b2b26]" />
              <span className="relative">
                Call our support
                {/* Left to right sliding underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0b2b26] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-xs tracking-wider">Follow on</span>
            <div className="flex items-center space-x-3 text-[#0b2b26]">
              <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="w-full px-4 md:px-8 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-[#0b2b26] p-1.5 rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <span className="text-2xl font-black text-[#0b2b26] tracking-tight">
              SK <span className="font-light">Investment</span>
            </span>
          </Link>

          {/* Desktop Navigation Router Links */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-[#0b2b26]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm relative py-2 transition-colors duration-200 hover:opacity-80 ${
                    isActive ? "text-[#0b2b26]" : "text-slate-600"
                  }`}
                >
                  {link.name}
                  {/* Framer motion spring layout bar for smooth sliding transitions */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0b2b26] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions (Search & IIFL Affiliate CTA Button) */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#0b2b26] p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="w-5 h-5 stroke-[2]" />
            </button>
            
            {/* Premium CTA Button matching image_f6ecaa.png */}
            <a
              href="https://iiflcs.in/IILLTD/DZcCV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b3f29f] text-[#0b2b26] px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:bg-[#a1e08d]"
            >
              <span>Open Demat Account</span>
              <span className="w-2 h-2 bg-[#0b2b26] rounded-full inline-block"></span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="text-[#0b2b26] p-1">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-[#0b2b26] focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DROPDOWN DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg absolute left-0 w-full z-50"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block w-full text-left text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${
                      isActive
                        ? "text-[#0b2b26] bg-slate-50"
                        : "text-slate-600 hover:text-[#0b2b26] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-2">
                <a
                  href="https://iiflcs.in/IILLTD/DZcCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#b3f29f] text-[#0b2b26] py-3.5 rounded-full font-bold flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Open Demat Account</span>
                  <span className="w-2 h-2 bg-[#0b2b26] rounded-full"></span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}