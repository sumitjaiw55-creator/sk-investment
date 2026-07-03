import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Aapke exact navigation items
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "SIP Calculator", path: "/calculator" },
  ];

  return (
    <footer className="w-full bg-[#07473a] text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* UPPER FOOTHOLD: Main 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* COLUMN 1: Logo & Dynamic Call to Action (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            {/* Logo Section matching navbar styling */}
            <Link to="/" className="flex items-center space-x-2 w-fit">
              <div className="bg-[#b3f29f] p-1.5 rounded flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-[#07473a] stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                SK <span className="font-light opacity-90">Investment</span>
              </span>
            </Link>

            {/* High Impact Headline text */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.15] max-w-sm">
              Ready to Grow Your Wealth? Let's <span className="text-[#b3f29f]">Connect</span> today.
            </h2>
          </div>

          {/* COLUMN 2: Balanced Link Matrix Blocks (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 w-full">
            {navLinksGrid(quickLinks)}
            
            {/* Segment highlighting SEBI Info link blocks */}
            <div className="border border-white/10 bg-white/5 p-4 rounded-sm text-sm text-gray-300 flex flex-col justify-center">
              <p className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-[#b3f29f]">Credibility</p>
              <p className="text-xs leading-relaxed">SEBI Registered Expert Advisor</p>
            </div>
            
            {/* Highlighted CTA Contact link box matching image layout */}
            <Link 
              to="/contact" 
              className="col-span-2 bg-[#b3f29f] text-[#07473a] p-4 rounded-sm font-bold flex items-center justify-between hover:bg-[#a1e08d] transition-all group"
            >
              <span className="text-sm sm:text-base">Contact Us</span>
              <div className="bg-[#07473a] p-1.5 rounded-sm flex items-center justify-center text-white">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>

          {/* COLUMN 3: Premium Newsletter Subscription Card (4 Cols) */}
          <div className="lg:col-span-4 border border-white/10 bg-white/[0.02] p-8 rounded-sm shadow-xl flex flex-col justify-between h-full min-h-[220px]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Input wrapper */}
              <div className="relative w-full flex items-center bg-[#05352c] border border-white/10 rounded-sm overflow-hidden p-1.5">
                <input 
                  type="email" 
                  placeholder="Your email ..." 
                  className="w-full bg-transparent text-sm text-white px-3 py-2.5 focus:outline-none placeholder-gray-400"
                  required
                />
                <button type="submit" className="bg-[#b3f29f] text-[#07473a] p-2.5 rounded-sm hover:bg-[#a1e08d] transition-colors flex items-center justify-center">
                  <Send className="w-4 h-4 fill-current" />
                </button>
              </div>

              {/* Data validation privacy checkbox statement */}
              <label className="flex items-start space-x-3 cursor-pointer select-none group text-xs text-gray-300 leading-relaxed">
                <input 
                  type="checkbox" 
                  className="mt-0.5 accent-[#b3f29f] bg-transparent border-white/20 rounded-sm focus:ring-0" 
                  required
                />
                <span>
                  I agree that my submitted data is being{" "}
                  <a href="/privacy" className="underline hover:text-white transition-colors">collected and stored</a>.
                </span>
              </label>
            </form>

            <div className="mt-6">
              <h3 className="text-base font-bold text-white">Subscribe to our newsletter</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                to get the latest investment tips, insights & stock market trends.
              </p>
            </div>
          </div>

        </div>

        {/* COMPLIANCE LAYER: SEBI Mandatory Legal Disclaimer */}
        <div className="w-full border-t border-white/10 py-6 text-[11px] text-gray-400 leading-relaxed tracking-wide text-justify sm:text-left">
          <p>
            <span className="font-semibold text-white">Disclaimer:</span> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>

        {/* BOTTOM LAYER: Legal copyright line and Social Icons */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Block: Embedded Social Icon List */}
          <div className="flex items-center space-x-3 order-2 md:order-1">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 bg-white/[0.04] border border-white/10 rounded-sm flex items-center justify-center text-white hover:bg-[#b3f29f] hover:text-[#07473a] transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Center & Right Block: Copyright Information matrix wrapper */}
          <div className="w-full md:w-auto bg-white/[0.02] border border-white/5 py-3 px-6 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 order-1 md:order-2 flex-grow max-w-2xl">
            <span>© {currentYear} <span className="text-[#b3f29f] font-semibold">SK Investment</span>. All Rights Reserved.</span>
            <div className="flex space-x-4 divide-x divide-white/10 text-right">
              <Link to="/privacy" className="hover:text-white transition-colors pl-4">Confidentiality & Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors pl-4">Legal Information</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

// Helper block function rendering links with standard grid dot bullets matching image design
function navLinksGrid(links) {
  return links.map((link) => (
    <Link 
      key={link.name} 
      to={link.path} 
      className="border border-white/10 bg-white/[0.02] p-4 rounded-sm flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-[#b3f29f] hover:bg-white/[0.04] transition-all"
    >
      <span className="text-[#b3f29f] text-base leading-none">•</span>
      <span>{link.name}</span>
    </Link>
  ));
}