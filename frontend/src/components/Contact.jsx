import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Plus, 
  Minus, 
  Building2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // FAQ Matrix Dataset
  const faqs = [
    {
      q: "Kya aap SEBI registered advisor hain?",
      a: "Haan, hamare desk equity aur derivatives analytics ke liye SEBI registered professionals dwara managed hain. Hum poori tarah compliance rules ko follow karte hain."
    },
    {
      q: "Demat Account open karne ka kya process hai?",
      a: "Hum IIFL Securities ke franchise network partner hain. Form submit karne ke baad hamari team aapko call karegii aur online paperless authentication se 10 minute me account setup ho jayega."
    },
    {
      q: "Kya aap fixed ya guaranteed monthly returns promise karte hain?",
      a: "Bilkul nahi. SEBI statutory regulations ke mutabik equity aur wealth market risks ke adheen hain. Hum koi fixed return guarantee nahi dete, balki risk profiling se capital growth optimize karte hain."
    },
    {
      q: "Portfolio checkup ka koi hidden charge hai?",
      a: "Nahi, first-time clients ke liye hamara initial 15-minute standard portfolio structural checkup aur health audit pipeline bilkul free hai."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const TELEGRAM_BOT_TOKEN = "8891296748:AAF6klxeT4U9LSoyutGa8udI6RImb3hk3BQ";
    const TELEGRAM_CHAT_ID = "5117294993";

    const textMessage = `
🚀 *New Lead Received (SK Investment)*
────────────────────────
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
💼 *Service Interested:* ${formData.service ? formData.service.toUpperCase() : 'Not Selected'}
💬 *Message:* ${formData.message || 'None'}
────────────────────────
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: textMessage,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Server communication issue. Please retry submitting form.");
      }
    } catch (error) {
      console.error("Telegram API Error:", error);
      alert("Network lag detected. Please check connection parameters.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white text-[#07473a] min-h-screen font-sans antialiased">
      
      {/* 1. HEADER HERO BANNER SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#f6f7f6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col space-y-4">
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              GET IN TOUCH
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07473a] leading-[1.1]"
              >
                Let's Start a <br />
                Professional Conversation
              </motion.h1>
            </div>
            <div className="lg:col-span-5 pb-1">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md"
              >
                Ready to optimize your wealth? Request an official callback or visit our regional network desks. Our analysts are prepared to structure your financial horizons.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CONTACT INFRASTRUCTURE & FORM GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT INTERACTION BLOCK: Metadata & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Quick Connect Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f4f5f3] border border-transparent p-6 rounded-sm group cursor-pointer transition-all">
                <div className="w-10 h-10 bg-[#07473a] text-[#b3f29f] rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="font-bold text-lg text-[#07473a] mb-1">Call Our Desk</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold">+91 9935923658</p>
                <p className="text-slate-400 text-[10px] mt-1 font-medium">Mon-Sat, 9:00 AM - 6:00 PM</p>
              </div>

              <div className="bg-[#f4f5f3] border border-transparent p-6 rounded-sm group cursor-pointer transition-all">
                <div className="w-10 h-10 bg-[#07473a] text-[#b3f29f] rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="font-bold text-lg text-[#07473a] mb-1">Email Support</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold break-all">contact@sk-investment.in</p>
                <p className="text-slate-400 text-[10px] mt-1 font-medium">24/7 Digital Operations</p>
              </div>
            </div>

            {/* Embedded Native Maps Box Framework */}
            <div className="rounded-sm overflow-hidden h-[300px] border border-gray-100 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d101852.74505444727!2d83.07470262050632!3d25.53514474800883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3991df3d42931c9b%3A0x58ce05a762478342!2sIIFL%20Securities%20Online%20Trading%2C%20West%20market%2C%20Saidpur%2C%20Uttar%20Pradesh%20233304!3m2!1d25.5351438!2d83.21889809999999!4m5!1s0x3991df3d42931c9b%3A0x58ce05a762478342!2sIIFL%20Securities%20Online%20Trading%2C%20West%20market%2C%20Saidpur%2C%20Uttar%20Pradesh%20233304!3m2!1d25.5351438!2d83.21889809999999!5e1!3m2!1sen!2sin!4v1782306002675!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT INTERACTION BLOCK: Flat Form Engine */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-sm p-8 md:p-10 shadow-sm w-full"
          >
            <h3 className="text-2xl font-bold tracking-tight text-[#07473a] mb-6">Request an Advisory Callback</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#f4f5f3] border border-transparent rounded-sm px-4 py-3 text-sm text-[#07473a] focus:outline-none focus:bg-white focus:border-[#07473a] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ten digit mobile number"
                    className="w-full bg-[#f4f5f3] border border-transparent rounded-sm px-4 py-3 text-sm text-[#07473a] focus:outline-none focus:bg-white focus:border-[#07473a] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full bg-[#f4f5f3] border border-transparent rounded-sm px-4 py-3 text-sm text-[#07473a] focus:outline-none focus:bg-white focus:border-[#07473a] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Service Horizon Allocation</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f5f3] border border-transparent rounded-sm px-4 py-3 text-sm text-[#07473a] font-medium focus:outline-none focus:bg-white focus:border-[#07473a] transition-all cursor-pointer"
                >
                  <option value="">Select an Allocation Segment</option>
                  <option value="mutual-funds">Mutual Funds Core Execution</option>
                  <option value="sip">Systematic SIP Strategy</option>
                  <option value="stock-trading">Equity / Derivatives (IIFL Trading)</option>
                  <option value="portfolio-review">Free SEBI Portfolio Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Message context (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your current allocation parameters or targets..."
                  className="w-full bg-[#f4f5f3] border border-transparent rounded-sm px-4 py-3 text-sm text-[#07473a] focus:outline-none focus:bg-white focus:border-[#07473a] transition-all resize-none"
                ></textarea>
              </div>

              {/* Signature Style Form Submission Trigger */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#b3f29f] text-[#07473a] py-4 rounded-full font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed transform hover:bg-[#a1e08d]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Configuring Data...</span>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> <span>Callback Requested Successfully</span>
                  </>
                ) : (
                  <>
                    <span>Submit Callback Request</span>
                    <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* NEW COMPONENT 1: OFFICE BRANCHES GRID CONFIG */}
      <section className="py-24 bg-[#f6f7f6] border-t border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-2 mb-16 text-center lg:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">OUR LOCATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Regional Network Desks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Branch 1: Ghazipur Main Hub */}
            <div className="bg-white p-8 border border-gray-50 rounded-sm shadow-sm flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 bg-[#07473a] text-[#b3f29f] rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight">Saidpur Head Office</h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#07473a] shrink-0 mt-0.5" /> Front of Hanuman Temple, West Market, Saidpur, Ghazipur, UP - 233304</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#07473a] shrink-0" /> Mon - Sat: 9:00 AM - 6:00 PM (Sunday Closed)</p>
                </div>
              </div>
            </div>

            {/* Branch 2: Varanasi Corporate Node */}
            <div className="bg-white p-8 border border-gray-50 rounded-sm shadow-sm flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 bg-[#07473a] text-[#b3f29f] rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight">Varanasi Consulting Desk</h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#07473a] shrink-0 mt-0.5" /> Commercial Sector Enclave, Cantonment Area, Varanasi, UP - 221002</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#07473a] shrink-0" /> Prior Appointment Basis (Digital Hub Node)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW COMPONENT 2: INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-2 mb-16 text-center">
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                FAQ SUPPORT
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Common Advisory Disclosures</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-left font-bold text-base sm:text-lg text-[#07473a] hover:opacity-80 transition-all focus:outline-none"
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? <Minus className="w-4 h-4 shrink-0 ml-4" /> : <Plus className="w-4 h-4 shrink-0 ml-4" />}
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pb-4 pt-1">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
