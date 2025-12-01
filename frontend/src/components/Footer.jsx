import { Link } from 'react-router-dom';
import { TrendingUp, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  
  // Helper function to scroll to top when link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold tracking-tight">SK Investment</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your trusted partner for comprehensive financial advisory services.
              Building wealth through expert guidance in Mutual Funds, SIPs, and Stock Trading.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-lg transition-all border border-slate-800 hover:border-amber-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-lg transition-all border border-slate-800 hover:border-amber-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-lg transition-all border border-slate-800 hover:border-amber-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-slate-900 p-3 rounded-lg transition-all border border-slate-800 hover:border-amber-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-slate-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-amber-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/calculator" onClick={scrollToTop} className="text-slate-400 hover:text-amber-500 transition-colors">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-slate-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-slate-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-0.5">Phone</div>
                  <a href="tel:+919935923658" className="hover:text-amber-500 transition-colors">
                    +91 9935923658
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-0.5">Email</div>
                  <a href="mailto:contact@sk-investment.in" className="hover:text-amber-500 transition-colors">
                    contact@sk-investment.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-0.5">Location</div>
                  <div>Varansi,Uttar Pradesh</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Disclaimer */}
        <div className="border-t border-slate-900 pt-8">
          <div className="bg-slate-900 rounded-xl p-6 mb-6 border border-slate-800">
            <p className="text-slate-500 text-sm leading-relaxed text-justify">
              <span className="font-bold text-amber-500">Disclaimer:</span> Investments in securities market are subject to market risks.
              Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM
              in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
              Past performance is not indicative of future results.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2025 SK Investment. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-500 transition-colors">IIFL Partnership</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}