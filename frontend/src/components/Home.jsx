import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Quote, 
  PieChart, 
  TrendingUp, 
  BarChart3,
  ChevronRight,
  Shield,
  Award,
  CheckCircle2
} from 'lucide-react';

// Import WhyChooseUs (Assuming yeh file aapke paas hai)
import WhyChooseUs from './WhyChooseUs';

// --- PART 1: HERO SECTION (Internal) ---
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white min-h-screen flex flex-col justify-center">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[30%] h-[30%] bg-amber-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Review Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 backdrop-blur-md rounded-full px-4 py-2 shadow-lg shadow-amber-500/5">
              <div className="flex text-amber-500">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
              </div>
              <span className="text-xs font-semibold text-slate-300">
                <span className="text-white">4.9/5</span> from 500+ Clients
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Build Wealth, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Not Just Savings.
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Stop letting inflation eat your money. Get expert-curated Mutual Funds, SIP strategies, and IIFL-powered trading setups.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Start Free Portfolio Review
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/services')}
                className="bg-slate-800/40 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                View Services
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> SEBI Compliant</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> No Hidden Charges</div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Visuals) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl p-3 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Dashboard"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[550px]"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-slate-900/95 border border-slate-700 p-6 rounded-2xl shadow-2xl z-20 w-64">
                <div className="text-sm text-slate-400">Total Assets</div>
                <div className="text-3xl font-bold text-amber-500">₹50Cr+</div>
                <div className="w-full bg-slate-800 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Logos Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-500 mb-6 font-medium uppercase">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['HDFC Bank', 'TCS', 'Infosys', 'IIFL Securities', 'Reliance'].map(brand => (
              <span key={brand} className="text-xl font-bold text-slate-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PART 2: SERVICES TEASER ---
const ServicesTeaser = () => {
  const navigate = useNavigate();
  const services = [
    { icon: PieChart, title: "Mutual Funds", desc: "Expertly curated portfolios.", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: TrendingUp, title: "SIP Planning", desc: "Start small with ₹500/mo.", color: "text-green-400", bg: "bg-green-400/10" },
    { icon: BarChart3, title: "Stock Trading", desc: "IIFL powered demat account.", color: "text-amber-500", bg: "bg-amber-500/10" }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Holistic Wealth Solutions</h2>
          </div>
          <button onClick={() => navigate('/services')} className="flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors">
            View All Services <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => navigate('/services')}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 cursor-pointer"
            >
              <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-6`}><s.icon className={`h-7 w-7 ${s.color}`} /></div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 mb-6">{s.desc}</p>
              <div className="flex items-center text-sm font-bold text-slate-500 group-hover:text-white">Learn More <ChevronRight className="h-4 w-4 ml-1" /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PART 3: TESTIMONIALS ---
const Testimonials = () => {
  const reviews = [
    { name: "Rajesh Malhotra", role: "IT Professional", text: "My portfolio is up by 18% in just 2 years!", rating: 5 },
    { name: "Priya Sharma", role: "Doctor", text: "Transparency is what I like about them. No hidden commissions.", rating: 5 },
    { name: "Amit Verma", role: "Business Owner", text: "I feel much more secure about my financial future now.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by <span className="text-amber-500">500+ Families</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
              <Quote className="absolute top-8 right-8 h-8 w-8 text-slate-800" />
              <div className="flex gap-1 mb-4">{[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />)}</div>
              <p className="text-slate-300 italic mb-6">"{review.text}"</p>
              <div>
                <div className="font-bold text-white text-sm">{review.name}</div>
                <div className="text-xs text-slate-500">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PART 4: FINAL CTA ---
const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-slate-950 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-10 md:p-16 text-center relative shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Stop Guessing, Start Investing.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/contact')} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl">Book Free Consultation</button>
          <button onClick={() => navigate('/calculator')} className="bg-white/20 text-slate-900 border-2 border-slate-900/10 px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">Check SIP Returns</button>
        </div>
      </div>
    </section>
  );
};

// --- MAIN HOME COMPONENT ---
export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <HeroSection />
      <ServicesTeaser />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}