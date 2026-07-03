import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aapke active verified credentials
    const TELEGRAM_BOT_TOKEN = "8891296748:AAF6klxeT4U9LSoyutGa8udI6RImb3hk3BQ";
    const TELEGRAM_CHAT_ID = "5117294993";

    // Clean Structured Markdown Template for Telegram
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
        // Form states clearing layout back to base parameters
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        
        // Reset success UI message animation after 5 seconds
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden text-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 mt-2 tracking-tight">
            Let's Start a <span className="text-blue-600">Conversation</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to grow your wealth? Visit our office or fill out the form below. 
            Our advisors are ready to help you plan your financial future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 group">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Call Us</h3>
                <p className="text-slate-600 text-sm font-semibold">+91 9935923658</p>
                <p className="text-slate-400 text-xs mt-1 font-medium">Mon-Fri, 9am - 6pm</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 group">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Email Us</h3>
                <p className="text-slate-600 text-sm font-semibold break-all">contact@sk-investment.in</p>
                <p className="text-slate-400 text-xs mt-1 font-medium">24/7 Online Support</p>
              </div>
            </div>

            {/* Office Address & Hours */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mt-1 shadow-sm">
                  <MapPin className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">Head Office</h3>
                  <p className="text-slate-600 mt-1 text-sm font-medium leading-relaxed">
                    Front of Hanuman Temple, Saidpur,<br />
                    Ghazipur, Uttar Pradesh - 221115
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-6 border-t border-slate-200">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mt-1 shadow-sm">
                  <Clock className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">Opening Hours</h3>
                  <p className="text-slate-600 mt-1 text-sm font-medium">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-rose-500 text-xs font-bold uppercase tracking-wider mt-1.5 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md w-fit shadow-sm">Sunday Closed</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden h-[250px] border border-slate-200 shadow-md">
              <iframe 
                src="<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d101852.74505444727!2d83.07470262050632!3d25.53514474800883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3991df3d42931c9b%3A0x58ce05a762478342!2sIIFL%20Securities%20Online%20Trading%2C%20West%20market%2C%20Saidpur%2C%20Uttar%20Pradesh%20233304!3m2!1d25.5351438!2d83.21889809999999!4m5!1s0x3991df3d42931c9b%3A0x58ce05a762478342!2sIIFL%20Securities%20Online%20Trading%2C%20West%20market%2C%20Saidpur%2C%20Uttar%20Pradesh%20233304!3m2!1d25.5351438!2d83.21889809999999!5e1!3m2!1sen!2sin!4v1782306002675!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:scale-[1.01] transition-transform duration-500"
              ></iframe>
            </div>

          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl relative"
          >
            {/* Form Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Request a Callback</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-sm shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-sm shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-sm shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-inner cursor-pointer"
                >
                  <option value="" className="text-slate-400">Select a Service</option>
                  <option value="mutual-funds">Mutual Funds</option>
                  <option value="sip">SIP Planning</option>
                  <option value="stock-trading">Stock Trading</option>
                  <option value="portfolio-review">Free Portfolio Review</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your financial goals..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-sm shadow-inner resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-white" /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Request <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}