import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Pata karne ke liye ki hum kis page par hain

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SIP Calculator", path: "/calculator" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <TrendingUp className="h-8 w-8 text-amber-500 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-white tracking-tight">
              SK <span className="text-amber-500">Investment</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  location.pathname === link.path
                    ? "text-amber-500"
                    : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://iiflcs.in/IILLTD/DZcCV"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Demat Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block w-full text-left text-lg font-medium py-2 ${
                    location.pathname === link.path
                      ? "text-amber-500"
                      : "text-slate-300 hover:text-amber-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-bold mt-4"
              >
                Open Demat Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
